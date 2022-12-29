import React , { Component } from "react";
import userService from "../services/user.service";
import pic from "../Icons/add.gif"
import first from "../Icons/first.png"
import Select from 'react-select';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { SubmitButton } from "../components/yellow-button";

var option=[];
  option = [
    { label: "Female", value: "Female" },
    { label: "Male", value: "Male" },
  ];

class ThirdStep extends Component {

    render() {
        return(
          <div className="card-body">
          <form>
            <div className="form-group">
              <label>Select Room</label>
                <Select 
                    placeholder={<div>Select Room</div>}
                />
              </div>
              <div>
                <h5 className="text-center">Or add new</h5>
              </div>
              <div className="form-group">
                  <label>Room Name: </label>
                  <input placeholder="Room Name" name ="room-name" className="form-control">
                  </input>
              </div>
              <SubmitButton type="submit"  style={{marginLeft: "50px"}} >Save</SubmitButton>
              <SubmitButton type="submit"  style={{marginLeft: "10px"}}>Cancel</SubmitButton>
          </form>
          </div>
        )
    }
}
export default ThirdStep