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

class FirstStep extends Component {
  constructor(props){
    super(props)
    this.changeBranchLocationHandler = this.changeBranchLocationHandler.bind(this);
    this.changeBranchNameHandler = this.changeBranchNameHandler.bind(this);
    this.saveBranch = this.saveBranch.bind(this);
    this.state = {
      location:'',
      name:''
    }
  }
  changeBranchLocationHandler=(event) => {
    this.setState({location: event.target.value});
  }
  changeBranchNameHandler=(event) => {
    this.setState({name: event.target.value});
  }
  saveBranch=(e)=>{
    e.preventDefault();
    let branch = {location: this.state.location, name: this.state.name};
    console.log('branch => '+JSON.stringify(branch));
    userService.createPerson(branch)
    .then(
        (response) => {
          console.log(response);
          console.log("msg "+response.data.message);
          console.log("success "+response.data.success);
          this.setState({
            message: response.data.message,
            success: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            success: false,
            message: resMessage,
          });
        }
      ).catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
}
    render() {
      const imgStyle ={
        height: '40px',
      }
        return(
                  <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label>Select Branch</label>
                            <Select 
                                placeholder={<div>Select Branch</div>}
                            />
                          </div>
                          <div>
                            <h5 className="text-center">Or add new</h5>
                          </div>
                          <div className="form-group">
                              <label>Branch Name: </label>
                              <input placeholder="Branch Name" name ="name" className="form-control" value={this.state.name} onChange={this.changeBranchNameHandler}>
                              </input>
                          </div>
                          
                          <div className="form-group">
                              <label>Branch Location: </label>
                              <input placeholder="Branch Location" name ="location" className="form-control" value={this.state.location} onChange={this.changeBranchLocationHandler}>
                              </input>
                          </div>
                          
                          <SubmitButton type="submit" onClick={this.saveBranch} style={{marginLeft: "50px"}} >Save</SubmitButton>
                          <SubmitButton type="submit"  style={{marginLeft: "10px"}}>Cancel</SubmitButton>
                      </form>
                      </div>
        )
    }
}
export default FirstStep