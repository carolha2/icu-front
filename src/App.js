import React, { Component } from "react";
import { Switch, Route, Link , NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import { LoginForm } from "./componentsUI/loginForm";
import Register from "./components/register.component";
import { RegisterForm } from "./componentsUI/registerFrom";
import ListPersons from "./components/list-persons.component";
import CreateEmployee from "./components/create_employee.component";
import UpdateEmployee from "./components/update-employee.component";
import PersonMain from "./components/person-main";
import { AccountBox } from "./componentsUI/accountBox";
import ContactUsForm from "./ContactUs/ConatcUsForm";
import { Cam } from "./cameraComponents/index";
import CreateCamera from "./cameraComponents/add-camera";


// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import FooterComponent from "./components/footer.component";
import  Navbar  from "./navbar/navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }


  render() {

    return (
      <div>
        <Navbar/>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={AccountBox}/>
            <Route path="/list" component={ListPersons} />
            <Route path="/person" component={PersonMain} />
            <Route path="/add" component={CreateEmployee} />
            <Route path="/update/:id" component={UpdateEmployee} />
            <Route path="/contactUs" component= {ContactUsForm} />
            <Route path="/cam" component={Cam} />
            <Route path="/addCam" component={CreateCamera} />
          </Switch>
        </div>
        <FooterComponent className="footer" />
        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
