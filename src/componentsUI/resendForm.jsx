import React , { useContext } from "react";
import { useState } from "react";
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
    export function ResendForm(props) {
        const { switchToConfirm } = useContext(AccountContext);
        const[email, setEmail] = useState("");
        const[success, setSuccess] = useState(false);
        const[message, setMessage] = useState("");

        const handleResend = (event) => {
            event.preventDefault();
            let resend = {
              email
            };
            console.log("resend => "+JSON.stringify(resend));
            RegisterService.resend(email).then(
              (response) => {
                console.log(response);
                console.log("msg "+response.data.message);
                console.log("success "+response.data.success);
                setMessage(response.data.message)
                setSuccess(true);
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
              if(message ===""){
                switchToConfirm(props);
              }
          }
        return (
            <BoxContainer>
              <FormContainer>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormContainer>
              <Marginer direction="vertical" margin={10} />
              <Marginer direction="vertical" margin="1.6em" />
              <SubmitButton type="submit" onClick={handleResend}>Resend</SubmitButton>
              <Marginer direction="vertical" margin="1em" />
              <MutedText>Ready to confirm?{" "}</MutedText>
              <MutedLink href="#">
                <BoldLink href="#" onClick={switchToConfirm}>
                  Confirm
                </BoldLink>
              </MutedLink>
            </BoxContainer>
          );
    }