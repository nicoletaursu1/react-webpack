import React, { useState } from "react";
import styled from "styled-components";

import colors from "../../constants/colors";
import SignButton from "./SignButton";
import SignInput from "./SignInput";

interface FormProps {
  signedUp: boolean;
}

const SignForm: React.FC<FormProps> = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo);
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
          type="text"
          value={userInfo.password}
          placeholder="Enter password"
        />
        {!props.signedUp && (
          <SignInput
            onChange={onChange}
            name="confirmPassword"
            type="text"
            value={userInfo.confirmPassword}
            placeholder="Confirm password"
          />
        )}

        <SignButton title="SUBMIT" />
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
