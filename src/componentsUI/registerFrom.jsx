import React, { useContext } from "react";
import { useState } from "react";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Select from 'react-select';
import RegisterService from "../services/register.service";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  MutedText,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
export function RegisterForm(props) {
   const { switchToSignin } = useContext(AccountContext);
   const { switchToConfirm } = useContext(AccountContext);
   const[dob, setDOB] = useState("");
   const[email, setEmail] = useState("");
   const[gender, setGender] = useState("");
   const[name, setName] = useState("");
   const[password, setPassword] = useState("");
   const[phonenumber, setPhoneNumber] = useState("");
   const[username, setUsername] = useState("");
   const[errorMessages, setErrorMessages] = useState("");
   const[isSuccessful, setIsSuccessful] = useState(false);

   const handleRegister = (event) => {
    event.preventDefault();
    localStorage.setItem("registerEmail", JSON.stringify(email));
    let info = {
      dob,
      email,
      gender,
      name,
      password,
      phonenumber,
      username
    };
    console.log('info => '+JSON.stringify(info));
    RegisterService.register(
      dob,
      email,
      gender,
      name,
      password,
      phonenumber,
      username ).then(
        (response) => {
          console.log(response);
          console.log("msg "+response.data.message);
          console.log("success "+response.data.success);
          setErrorMessages(response.data.message)
          setIsSuccessful(true);
          // window.location.href = "/login";
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            setErrorMessages(resMessage)
            setIsSuccessful(false);
        }

      );
      if(errorMessages ===""){
        switchToConfirm(props);
      }
   }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Date Of Birth"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Phone Number"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleRegister}>Sign Up</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedText>Done Registering?{" "}</MutedText>
      <MutedLink href="#">
        <BoldLink href="#" onClick={switchToConfirm}>
          Confirm Account
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}