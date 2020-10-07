import React, { useState } from "react";
import styled from "styled-components";

import colors from "../constants/colors";

interface FormProps {
  signedUp: boolean;
}

const SignForm: React.FC<FormProps> = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo);
  };

  const resetForm = () => {
    setUserInfo({ email: "", password: "", confirmPassword: "" });
  };

  const onSubmit = e => {
    e.preventDefault();
    resetForm();
    console.log("Submitted");
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {(props.signedUp) ? <Header>SIGN IN</Header> : <Header>SIGN UP</Header>}

        <TextInput
          onChange={onChange}
          name="email"
          type="text"
          value={userInfo.email}
          placeholder="Enter your email"
        />
        <TextInput
          onChange={onChange}
          name="password"
          type="text"
          value={userInfo.password}
          placeholder="Enter password"
        />
        {!props.signedUp && (
          <TextInput
            onChange={onChange}
            name="confirmPassword"
            type="text"
            value={userInfo.confirmPassword}
            placeholder="Confirm password"
          />
        )}

        <Button type="submit">SUBMIT</Button>
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
const TextInput = styled.input`
  outline: none;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 5px 0;
  padding: 12px 20px;
  width: 280px;
`;
const Button = styled.button`
  align-self: flex-start;
  border: none;
  background-color: ${colors.green};
  color: white;
  font: 14px "Open-sans", sans-serif;
  padding: 10px 25px;
  border-radius: 20px;
  margin: 15px 0;
`;
export default SignForm;
