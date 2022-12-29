import React , { Component } from "react";
import userService from "../services/user.service";

class CreateEmployee extends Component {
    constructor(props){
        super(props)
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeRoomIDHandler = this.changeRoomIDHandler.bind(this);
        this.changeRoomNameHandler = this.changeRoomNameHandler.bind(this);
        this.changeBranchAddHandler = this.changeBranchAddHandler.bind(this);
        this.changeFaceIDHandler = this.changeFaceIDHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.state = {
            first_name:'',
            middle_name:'',
            last_name:'',
            room_id :{
                id:'',
                name:''
            },
            branch_add:'',
            face_id:''
        }
    }
    saveEmployee=(e)=>{
        e.preventDefault();
        let employee = {first_name: this.state.first_name, middle_name: this.state.middle_name, last_name: this.state.last_name, room_id : this.state.room_id, branch_add: this.state.branch_add, face_id: this.state.face_id};
        console.log('employee => '+JSON.stringify(employee));
        userService.createEmployee(employee)
        .then(res=>(
            this.props.history.push('/HR')
        ));
    }
    cancel(){
        this.props.history.push('/add');
    }
    changeFirstNameHandler=(event) => {
        this.setState({first_name: event.target.value});
    }
    changeMiddleNameHandler=(event) => {
        this.setState({middle_name: event.target.value});
    }
    changeLastNameHandler=(event) => {
        this.setState({last_name: event.target.value});
    }
    changeRoomIDHandler=(event) => {
        let id =event.target.value
        this.setState(
            prevState => ({
                room_id: {
                    ...prevState.room_id,
                    id: id
                }
            }))
            //{room:{room_id: event.target.value}})
    }
    changeRoomNameHandler=(event) => {
        let name =event.target.value
        this.setState(
            prevState =>({
                room_id: {
                    ...prevState.room_id,
                    name: name
                }
            }))
    }
    changeBranchAddHandler=(event) => {
        this.setState({branch_add: event.target.value});
    }
    changeFaceIDHandler=(event) => {
        this.setState({face_id: event.target.value});
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className = "card col-md-8 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Person</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input placeholder="First Name" name ="first_name" className="form-control"
                                        value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Middle Name: </label>
                                    <input placeholder="Middle Name" name ="middle_name" className="form-control"
                                        value={this.state.middle_name} onChange={this.changeMiddleNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input placeholder="Last Name" name ="last_name" className="form-control"
                                        value={this.state.last_name} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Room ID: </label>
                                    <input placeholder="Room ID" name ="room_id" className="form-control"
                                        value={this.state.room_id.id} onChange={this.changeRoomIDHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Room Name: </label>
                                    <input placeholder="Room Name" name ="room_id" className="form-control"
                                        value={this.state.room_id.name} onChange={this.changeRoomNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Branch Address: </label>
                                    <input placeholder="Branch Address" name ="branch_add" className="form-control"
                                        value={this.state.branch_add} onChange={this.changeBranchAddHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Face ID: </label>
                                    <input placeholder="Face ID" name ="face_id" className="form-control"
                                        value={this.state.face_id} onChange={this.changeFaceIDHandler}/>
                                </div>
                                <button className="button-85" onClick={this.saveEmployee}>Save</button>
                                <button className="button-85" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateEmployee