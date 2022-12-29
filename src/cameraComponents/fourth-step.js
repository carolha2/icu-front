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

class FourthStep extends Component {

    render() {
        return(
          <div className="card-body">
          <form>
              <div className="form-group">
                  <label>Camera Name: </label>
                  <input placeholder="Camera Name" name ="camera-name" className="form-control">
                  </input>
              </div>
              
              <div className="form-group">
                  <label>Camera URL </label>
                  <input placeholder="Camera URL" name ="camera-url" className="form-control">
                  </input>
              </div>
              
              <SubmitButton type="submit"  style={{marginLeft: "50px"}} >Save</SubmitButton>
              <SubmitButton type="submit"  style={{marginLeft: "10px"}}>Cancel</SubmitButton>
          </form>
          </div>
        )
    }
}
export default FourthStep