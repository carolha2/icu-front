import React , { Component } from "react";
import userService from "../services/user.service";
import { SubmitButton } from "./yellow-button";
import pic from "../Icons/add.gif"
import first from "../Icons/first.png"
import Select from 'react-select';

var option=[];
  option = [
    { label: "Female", value: "Female" },
    { label: "Male", value: "Male" },
  ];

class CreatePerson extends Component {
    constructor(props){
        super(props)
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeFaceFeaturesHandler = this.changeFaceFeaturesHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeIDHandler = this.changeIDHandler.bind(this);
        this.changeImageLinkHandler = this.changeImageLinkHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.savePerson = this.savePerson.bind(this);
        this.state = {
            age:'',
            dob:'',
            // faceFeatures:[1, 2, 3, 4, 5],
            gender:'',
            name:'',
            phonenumber:'',
            position:'',
            success: false,
            message: ''

        }
    }
    savePerson=(e)=>{
        e.preventDefault();
        let person = {age: this.state.age, dob: this.state.dob , gender: this.state.gender,
             name: this.state.name ,phonenumber: this.state.phonenumber , position: this.state.position};
        console.log('person => '+JSON.stringify(person));
        userService.createPerson(person)
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
    cancel(){
        this.props.history.push('/add');
    }
    changeAgeHandler=(event) => {
        this.setState({age: event.target.value});
    }
    changeDOBHandler=(event) => {
        this.setState({dob: event.target.value});
    }
    changeFaceFeaturesHandler=(event) => {
        this.setState({faceFeatures: event.target.value});
    }
    changeGenderHandler(e) {
        this.setState({gender: e.value});
        console.log(this.state.gender);
      }
    changeIDHandler=(event) => {
        this.setState({id: event.target.value});
    }
    changeImageLinkHandler=(event) => {
        this.setState({imageLink: event.target.value});
    }
    changeNameHandler=(event) => {
        this.setState({name: event.target.value});
    }
    changePhoneNumberHandler=(event) => {
        this.setState({phonenumber: event.target.value});
    }
    changePositionHandler=(event) => {
        this.setState({position: event.target.value});
    }

    render() {
        const styles = {
            border: '6px solid rgba(243, 172, 18, 1)',
            height: '60px',
        };
        const imgStyle ={
            height: '40px',
          }
          const smallerIcons ={
            height: '20px',
          }
          const help={
            background: 'url("../Icons/first.png") no-repeat left',
          }
        return(
            <div className="container" style={{marginLeft:"-70px"}}>
                <div className="row">
                    <div className = "card col-md-8 offset-md-3 offset-md-3">
                        <h2 className="text-center">
                            <br></br>
                            <img src={pic} style={imgStyle}/>
                            Add Person
                        </h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Age: </label>
                                    <input placeholder="Age" name ="age" className="form-control"
                                        value={this.state.age} onChange={this.changeAgeHandler}>
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>DOB: </label>
                                    <input placeholder="DOB" name ="dob" className="form-control"
                                        value={this.state.dob} onChange={this.changeDOBHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <Select
                                        placeholder="Select"
                                        options={ option }
                                        name="gender"
                                        onChange={this.changeGenderHandler}
                                        value={this.state.gender}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>name: </label>
                                    <input placeholder="name" name ="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>PhoneNumber: </label>
                                    <input placeholder="PhoneNumber" name ="phonenumber" className="form-control"
                                        value={this.state.phonenumber} onChange={this.changePhoneNumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Position: </label>
                                    <input placeholder="Position" name ="position" className="form-control"
                                        value={this.state.position} onChange={this.changePositionHandler}/>
                                </div>
                                <SubmitButton type="submit" onClick={this.savePerson} style={{marginLeft: "80px"}} >Save</SubmitButton>
                                <SubmitButton type="submit" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</SubmitButton>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreatePerson