import React , { useContext } from "react";
import { useState } from "react";
import RegisterService from "../services/register.service";
import './confirm.css';
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
    import { makeStyles } from "@material-ui/core/styles";
    export function ConfirmForm(props) {
        const { switchToSignin } = useContext(AccountContext);
        const { switchToResend } = useContext(AccountContext);
        const[email, setEmail] = useState(localStorage.getItem("registerEmail"));
        const[token1, setToken1] = useState("");
        const[token2, setToken2] = useState("");
        const[token3, setToken3] = useState("");
        const[token4, setToken4] = useState("");
        const[token5, setToken5] = useState("");
        const[token6, setToken6] = useState("");
        const[token, setToken] = useState("");
        const[success, setSuccess] = useState(false);
        const[message, setMessage] = useState("");
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(email);
            RegisterService.confirm(email, token).then(
              (response) => {
                console.log("msg "+response.data.message);
                console.log("success "+response.data.success);
                setMessage(response.data.message)
                setSuccess(true);
                // window.location.href = "/profile";
              },
              error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                  setSuccess(false);
                  setMessage(resMessage);
                  console.log(resMessage);
              }
              );
              switchToSignin(props);
          }
          function handleChange(event) {
            setToken(token1+token2+token3+token4+token5+event.target.value);
            setEmail(email.slice(1, email.length - 1));
            console.log(token);
          }
        return (
            <BoxContainer>
              <div class="mb-6 text-center">
              <div id="otp" class="flex justify-center">
                <input class="m-2 text-center form-control-confirm form-control-solid-confirm rounded focus:border-blue-400 focus:shadow-outline" type="text" id="first" maxlength="1" onChange={(e) => setToken1(e.target.value)}/>
                <input class="m-2 text-center form-control-confirm form-control-solid-confirm rounded focus:border-blue-400 focus:shadow-outline" type="text" id="second" maxlength="1" onChange={(e) => setToken2(e.target.value)}/>
                <input class="m-2 text-center form-control-confirm form-control-solid-confirm rounded focus:border-blue-400 focus:shadow-outline" type="text" id="third" maxlength="1" onChange={(e) => setToken3(e.target.value)}/>
                <input class="m-2 text-center form-control-confirm form-control-solid-confirm rounded focus:border-blue-400 focus:shadow-outline" type="text" id="fourth" maxlength="1" onChange={(e) => setToken4(e.target.value)}/>
                <input class="m-2 text-center form-control-confirm form-control-solid-confirm rounded focus:border-blue-400 focus:shadow-outline" type="text" id="fifth" maxlength="1" onChange={(e) => setToken5(e.target.value)}/>
                <input class="m-2 text-center form-control-confirm form-control-solid-confirm rounded focus:border-blue-400 focus:shadow-outline" type="text" id="sixth" maxlength="1" onChange={handleChange}/>
              </div>
            </div>
              <Marginer direction="vertical" margin={10} />
              <Marginer direction="vertical" margin="1.6em" />
              <SubmitButton type="submit" onClick={handleSubmit}>Confirm</SubmitButton>
              <Marginer direction="vertical" margin="1em" />
              <MutedText>Don't have an account?{" "}</MutedText>
              <MutedLink href="#">
                <BoldLink href="#" onClick={switchToSignin}>
                  Signup
                </BoldLink>
              </MutedLink>
              <MutedText>resend code?{" "}</MutedText>
              <MutedLink href="#">
                <BoldLink href="#" onClick={switchToResend}>
                  Resend
                </BoldLink>
              </MutedLink>
            </BoxContainer>
          );
    }