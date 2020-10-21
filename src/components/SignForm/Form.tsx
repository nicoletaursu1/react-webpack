import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getMessageState,
  getSuccessfulState,
} from "../../store/selectors/index";
import { Redirect } from "react-router-dom";
import { AppState } from '../../store/typesafeConfig';

import FormContainer from "./FormContainer";

interface FormProps {
  signedUp: boolean;
  message?: string;
  successful?: boolean;
}

const SignForm: React.FC<FormProps> = (props) => {
  let authMessage = props.message;
  let authSuccessful = props.successful;

  return (
    <Wrapper>
      {authSuccessful && !props.signedUp ? (
        <Redirect to="/login" />
      ) : (
        authSuccessful && props.signedUp && <Redirect to="/dashboard" />
      )}

      <FormContainer
        signedUp={props.signedUp}
        message={authMessage}
        successful={authSuccessful}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state: AppState): Object => {
  return {
    message: getMessageState(state),
    successful: getSuccessfulState(state),
  };
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default connect(mapStateToProps)(SignForm);
