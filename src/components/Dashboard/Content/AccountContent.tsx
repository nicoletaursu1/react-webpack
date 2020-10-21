import React, { useState } from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";

import { getAccountState } from "../../../store/selectors";
import { AppState } from "../../../store/typesafeConfig";
import { IAccountState } from "../../../types";
import actions from '../../../store/actions';
import Input from "../../Input";
import Button from "../../Button";
import Alert from '../../Alert';

interface AccountProps {
  account?: IAccountState;
}

const AccountPage: React.FC<AccountProps> = ({ account }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  const [alert, showAlert] = useState(false);

  const onSubmit = (e?: React.FormEvent): void => {
    e.preventDefault();
    dispatch(actions.updateAccount(userData));
    showAlert(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Header>Update your information</Header>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          type="text"
          value={userData.email}
          placeholder="Email"
        />
        <Input
          onChange={onChange}
          name="firstName"
          type="text"
          value={userData.firstName}
          placeholder="First name"
        />
        <Input
          onChange={onChange}
          name="lastName"
          type="text"
          value={userData.lastName}
          placeholder="Last name"
        />
        <Input
          onChange={onChange}
          name="phoneNumber"
          type="tel"
          value={userData.phoneNumber}
          placeholder="Phone number"
        />
        {alert && (
          <Alert msgType={account.successful && "success"} message={account.message}/>
        )}
        
        <Button title="Update"/>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Header = styled.p`
  font: 16px sans-serif;
  opacity: 0.4;
  font-weight: 600;
  text-transform: uppercase;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const mapStateToProps = (state: AppState): Object => {
  return {
    account: getAccountState(state),
  };
};

export default connect(mapStateToProps)(AccountPage);
