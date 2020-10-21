import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../../store/actions";
import { IUserData } from "../../types";
import colors from "../../constants/colors";
import SignButton from "../Button";
import SignInput from "../Input";
import Alert from "../Alert";
import OptionText from "./OptionText";

interface FormProps {
  signedUp: boolean;
  message?: string;
  successful?: boolean;
}

const FormContainer: React.FC<FormProps> = ({
  signedUp,
  message,
  successful,
}) => {

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<IUserData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, showAlert] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onButtonClick = (): void => {
    if (!successful) {
      showAlert(true);
    }
  };

  const resetForm = (): void => {
    setUserInfo({ email: "", password: "", confirmPassword: "" });
  };

  const onSubmit = (e?: React.FormEvent): void => {
    e.preventDefault();
    if (!signedUp) {
      dispatch(actions.signUp(userInfo.email, userInfo.password));
    } else {
      dispatch(actions.login(userInfo.email, userInfo.password));
    }
    resetForm();
  };

  return (
    <Form onSubmit={onSubmit}>
      {signedUp ? <Header>SIGN IN</Header> : <Header>SIGN UP</Header>}

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
      {!signedUp && (
        <SignInput
          onChange={onChange}
          name="confirmPassword"
          type="password"
          value={userInfo.confirmPassword}
          placeholder="Confirm password"
        />
      )}
      {alert &&
        (successful ? (
          <Alert msgType="success" message="Authorized successfully!" />
        ) : (
          <Alert msgType="fail" message="Please check the credentials again." />
        )
        )
      }

      {!signedUp && <OptionText />}

      {(userInfo.password === userInfo.confirmPassword &&
        !(userInfo.confirmPassword === "")) ||
      signedUp ? (
        <SignButton title="SUBMIT" onClick={() => onButtonClick()} />
      ) : (
        <div
          style={{ alignSelf: "flex-start" }}
          onClick={() => onButtonClick()}
        >
          <SignButton title="SUBMIT" disabled />
        </div>
      )}
    </Form>
  );
};

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

export default FormContainer;
