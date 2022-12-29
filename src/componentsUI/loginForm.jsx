import React , { useContext } from "react";
import { useState } from "react";


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
    import AuthService from "../services/auth.service";
  export function LoginForm(props) {
      const { switchToSignup } = useContext(AccountContext);
      const[username, setUsername] = useState("");
      const[password, setPassword] = useState("");
      const[loading, setLoading] = useState(false);
      const[message, setMessage] = useState("");
      const handleSubmit = (event) => {
        event.preventDefault();
        let signIn = {
          username,
          password
        };
        console.log("signIn => "+JSON.stringify(signIn));
        setLoading(true);
        setMessage("");
        AuthService.login(username,password).then(
          (response) => {
            window.location.href = "/cam";
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              setLoading(false);
              setMessage(resMessage);
              console.log(resMessage);
          }
          );
      }

    return (
      <BoxContainer>
        <FormContainer>
          <Input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        {/* <MutedLink href="#">Forget your password?</MutedLink> */}
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={handleSubmit}>Sign In</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedText>Don't have an account?{" "}</MutedText>
        <MutedLink href="#">
          <BoldLink href="#" onClick={switchToSignup}> 
            Signup
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    );
  }