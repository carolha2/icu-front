import React from "react";
import { Box , Card, CardContent, Typography ,CardActions , Button , CardMedia} from '@material-ui/core';
import Wave from "react-wavify";
import { Background } from "./background";
import pic from "../Icons/add.gif"
export function Cam(props) {
    const n = 2;
    //let video1 = "http://192.168.1.6:6677/videofeed"
    return (
        [...Array(n)].map((elementInArray, index) => (
        <div className="rowCam" key={index}>
            <Box className="rowCam" >
                <Card>
                    <CardMedia component='img' height= '200' image={pic} />
                    <CardContent>
                        {/* <Typography gutterBottom variant='h5' component='div'>
                            help!
                        </Typography> */}
                        <Typography variant="body2" color="text.secondary">
                            Camera id = {index}
                        </Typography>
                </CardContent>
                    <CardActions>
                    <label>Motion Detection</label>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider-yellow round"></span>
                    </label>
                    <label>Face Detection</label>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider-yellow round"></span>
                    </label>
                        {/* <button className="slider-yellow">motion detetction</button> */}
                        {/* <button className="slider-yellow" size="small">face detetction</button> */}
                    </CardActions>
                </Card>
            </Box>
            <Background/>
        </div>
        )
        ) 
    )
}
