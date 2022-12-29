import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { SubmitButton } from "./yellow-button";
export default class ListPersons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:1,
      name:"",
      age:"",
      gender:"",
      phonenumber:"",
      position:"",
      dob:""
    };
    // this.editPerson = this.editPerson.bind(this);
    // this.deletePerson = this.deletePerson.bind(this);
  }
  deletePerson(id){
    UserService.deletePerson(id)
    .then(res =>{
      window.location.href = "/person";
        // this.setState({persons: this.state.persons.filter(person =>person.id !==id)})
    });

  }


  componentDidMount() {
    let temp = localStorage.getItem("personID");
    let temp1 = temp.substring(1,temp.length-1);
    console.log(temp1);
    this.state.id = temp1;
    UserService.getPersonById(this.state.id).then(
      response => {
        this.setState({
          name: response.data.result.name,
          age: response.data.result.age,
          gender: response.data.result.gender,
          phonenumber: response.data.result.phonenumber,
          position: response.data.result.position,
          dob: response.data.result.dob
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Persons List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Person Name</th>
                <th>Person Age</th>
                <th>Person Gender</th>
                <th>Person Phone number</th>
                <th>Person Position</th>
                {/* <th>Person Date of Birth</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
               {
                    <tr key = {this.state.id}>
                      <td>{this.state.name}</td>
                      <td>{this.state.age}</td>
                      <td>{this.state.gender}</td>
                      <td>{this.state.phonenumber}</td>
                      <td>{this.state.position}</td>
                      {/* <td>{this.state.dob}</td> */}
                      <td>
                        {/* <button onClick={()=> this.editEmployee(this.state.id)} className="btn btn-info">Update</button> */}
                        <button onClick={()=> this.deletePerson(this.state.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                      </td>
                    </tr>
               }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
