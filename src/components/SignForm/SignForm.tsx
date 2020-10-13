import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { IUserData } from "../../types";
import colors from "../../constants/colors";
import SignButton from "./SignButton";
import SignInput from "./SignInput";
import Alert from "../Alert";
import { signUp, login} from "../../store/actions";
import { getMessageState, getSuccessfulState } from "../../store/selectors";
import { RouteChildrenProps, Redirect } from "react-router-dom";

interface FormProps {
  signedUp: boolean,
  message?: string,
  successful?: boolean,
}

const SignForm: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch();
  let authMessage = props.message;
  let authSuccessful = props.successful;

  const [userInfo, setUserInfo] = useState<IUserData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, showAlert] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onButtonClick = (type?: string): void => {
    if(!authSuccessful) {
      showAlert(true);
    }
  };

  const resetForm = (): void => {
    setUserInfo({ email: "", password: "", confirmPassword: "" });
  };

  const onSubmit = (e?: React.FormEvent): void => {
    e.preventDefault();
    if (!props.signedUp) {
      dispatch(signUp(userInfo.email, userInfo.password));
    } else {
      dispatch(login(userInfo.email, userInfo.password));
    }
    
    resetForm();
  };

  return (
    <Wrapper>

      {(authSuccessful && !props.signedUp) ? (
        <Redirect to="/login" />
      ) : ((authSuccessful && props.signedUp) && (
        <Redirect to="/" />
      ))
      
      }
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

        {(((userInfo.password === userInfo.confirmPassword) && !(userInfo.confirmPassword === "")) || (props.signedUp)) ? (
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

const mapStateToProps = (state: Object) => {
  return {
    message: getMessageState(state),
    successful: getSuccessfulState(state)
  };
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

export default connect(mapStateToProps)(SignForm);
