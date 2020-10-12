import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { IUserData } from "../../types";
import colors from "../../constants/colors";
import SignButton from "./SignButton";
import SignInput from "./SignInput";
import Alert from "../Alert";
import { signUp } from "../../store/actions";
import { getMessageState } from "../../store/selectors";

interface FormProps {
  signedUp: boolean;
  message?: string;
}

const SignForm: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState<IUserData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, showAlert] = useState<boolean>(false);

  let authMessage = props.message;
  console.log("prop:", authMessage);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onButtonClick = (type: string): void => {
    showAlert(true);
    if (type === "enabled") {
      setTimeout(() => {
        showAlert(false);
      }, 3000);
    } else {
      setTimeout(() => showAlert(false), 3000);
    }
  };

  const resetForm = (): void => {
    setUserInfo({ email: "", password: "", confirmPassword: "" });
  };

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(signUp(userInfo.email, userInfo.password));
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
        {alert &&
          (authMessage === "" ? (
            <Alert msgType="fail" message="Please provide matching passwords" />
          ) : authMessage.includes("wrong") ? (
            <Alert msgType="fail" message={authMessage} />
          ) : (
            <Alert msgType="success" message={authMessage} />
          ))}

        {userInfo.password === userInfo.confirmPassword &&
        !(userInfo.confirmPassword === "") ? (
          <SignButton title="SUBMIT" onClick={() => onButtonClick("enabled")} />
        ) : (
          <div
            style={{ alignSelf: "flex-start" }}
            onClick={() => onButtonClick("disabled")}
          >
            <SignButton title="SUBMIT" disabled />
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

const mapStateToProps = (state) => {
  return {
    message: getMessageState(state),
  };
};

export default connect(mapStateToProps)(SignForm);
