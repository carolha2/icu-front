import React, {Component} from "react";
import userService from "../services/user.service";
import { SubmitButton } from "./yellow-button";

class PersonMain extends Component {
    constructor(props){
        super(props)
        this.changeIDHandler = this.changeIDHandler.bind(this);

        this.state = {
            id: 1
        }
    }
    // componentDidMount(){
    //     userService.getEmployeeById(this.state.id)
    //     .then(res=>{
    //         let employee = res.data;
    //         this.setState({first_name: employee.first_name,
    //              middle_name: employee.middle_name,
    //              last_name: employee.last_name,
    //              room_id : employee.room_id,
    //              branch_add: employee.branch_add,
    //              face_id: employee.face_id
    //         });
    //     });
    // }
    addPerson(){
        window.location.href = "/add";
      }
      listPersonByID(){
        window.location.href = "/list";
        // console.log(localStorage.getItem("personID"))
      }
    cancel(){
        window.location.href = "/person";
    }
    changeIDHandler=(event) => {
        this.setState({id: event.target.value});
        console.log(this.state.id);
        localStorage.setItem("personID", JSON.stringify(event.target.value));
    }

    render() {
        return(
            <div>
        <h2 className="text-center">Persons List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Add Person</th>
                <th>Get By ID</th>
              </tr>
            </thead>
            <tbody>
               {
                    <tr key = {1}>
                      <td><SubmitButton type="submit" onClick={this.addPerson} style={{width: '50%'}}>Add Person</SubmitButton></td>
                      <td><input placeholder="ID" name ="id"
                                        value={this.state.id} onChange={this.changeIDHandler}/>
                            <SubmitButton type="submit" onClick={this.listPersonByID} style={{width: '30%'}} > Get</SubmitButton>
                        </td>
                    </tr>
               }
            </tbody>
          </table>
        </div>
      </div>
        )
    }
}
export default PersonMain