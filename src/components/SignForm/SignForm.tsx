import React, { useState } from "react";
import styled from "styled-components";

import colors from "../../constants/colors";
import SignButton from "./SignButton";
import SignInput from "./SignInput";
import Alert from "../Alert";

interface FormProps {
  signedUp: boolean;
}

const SignForm: React.FC<FormProps> = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, showAlert] = useState(false);

  const onChange = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo);
  };

  const onButtonClick = () => {
    showAlert(true);
    setTimeout(() => showAlert(false), 3000);
  };

  const resetForm = () => {
    setUserInfo({ email: "", password: "", confirmPassword: "" });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    resetForm();
    console.log("Submitted");
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {props.signedUp ? <Header>SIGN IN</Header> : <Header>SIGN UP</Header>}

        <SignInput
          onChange={onChange}
          name="email"
          type="text"
          value={userInfo.email}
          placeholder="Enter your email"
        />
        <SignInput
          onChange={onChange}
          name="password"
          type="password"
          value={userInfo.password}
          placeholder="Enter password"
        />
        {!props.signedUp && (
          <SignInput
            onChange={onChange}
            name="confirmPassword"
            type="password"
            value={userInfo.confirmPassword}
            placeholder="Confirm password"
          />
        )}
        {alert && (
          <Alert msgType="fail" message="Please provide matching passwords"/>
        )}

        {userInfo.password === userInfo.confirmPassword && !(userInfo.confirmPassword === "") ? (
          <SignButton title="SUBMIT" />
        ) : (
          <div
            style={{ alignSelf: "flex-start"}}
            onClick={onButtonClick}
          >
            <SignButton title="SUBMIT" disabled/>
          </div>
        )}
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h1`
  align-self: self-start;
  color: white;
  font: 28px "Roboto", sans-serif;
  font-weight: 900;
  letter-spacing: 1.5px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 60px 150px;
  border-radius: 15px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export default SignForm;
