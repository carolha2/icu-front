import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
export default class BoardHR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  deleteEmployee(id){
    UserService.deleteEmployee(id)
    .then(res =>{
        this.setState({employees: this.state.employees.filter(employee =>employee.id !==id)})
    });

  }
  editEmployee(id){
    this.props.history.push('/update/'+id);
  }

  componentDidMount() {
    UserService.getEmployees().then(
      response => {
        this.setState({
          employees: response.data
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
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Middle Name</th>
                <th>Employee Last Name</th>
                <th>Employee Room ID</th>
                {/* <th>Employee Room Name</th> */}
                <th>Employee Branch Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
               {
                  this.state.employees.map(
                    employee =>
                    <tr key = {employee.id}>
                      <td>{employee.first_name}</td>
                      <td>{employee.middle_name}</td>
                      <td>{employee.last_name}</td>
                      <td>{employee.room_id.id}</td>
                      {/* <td>{employee.room_id.name}</td> */}
                      <td>{employee.branch_add}</td>
                      <td>
                        <button onClick={()=> this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                        <button onClick={()=> this.deleteEmployee(employee.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                      </td>
                    </tr>
                  )
               }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
