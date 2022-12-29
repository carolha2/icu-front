import React , { Component } from "react";
import userService from "../services/user.service";
import { SubmitButton } from "../components/yellow-button";
import pic from "../Icons/add.gif"
import branch from "../Icons/branch.png"
import department from "../Icons/department.png"
import room from "../Icons/room.png"
import camera from "../Icons/camera.png"
import '../App.css';
import { Stepper, StepLabel, Step ,makeStyles} from '@material-ui/core';
import FirstStep from "./first-step";
import SecondStep from "./second-step";
import ThirdStep from "./third-step";
import FourthStep from "./fourth-step";
function CreateCamera(){
    const useStyles = makeStyles(() => ({
        root: {
          "& .MuiStepIcon-completed": { color: "orange" },
        }
      }));
        const stepperStyle = useStyles();
        const imgStyle ={
            height: '40px',
          }
        const Style ={
            height: '30px',
          }
        return(
            <div className="container" style={{width:"70%", marginLeft: "100px"}}>
                <div className="row">
                    <div className = "card col-md-8 offset-md-3 offset-md-3">
                        <h2 className="text-center">
                            <br></br>
                            <img src={pic} style={imgStyle}/>
                            Add Camera
                        </h2>
                        <div className="center-stepper">
                                <Stepper className={stepperStyle.root} style={{ backgroundColor: "transparent" }} activeStep= '1' orientation='horizontal'>
                                    <Step>
                                        <img src={branch} style={Style}/>
                                        <StepLabel></StepLabel>
                                    </Step>
                                    <Step>
                                        <img src={department} style={Style}/>
                                        <StepLabel></StepLabel>
                                    </Step>
                                    <Step>
                                        <img src={room} style={Style}/>
                                        <StepLabel></StepLabel>
                                    </Step>
                                    <Step>
                                        <img src={camera} style={Style}/>
                                        <StepLabel></StepLabel>
                                    </Step>
                                </Stepper>
                                <FirstStep/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default CreateCamera