import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Hamburger from "../Hamburger";
import UserPhoto from "../UserPhoto";
import { getAccountState } from '../../store/selectors';
import { IUserData } from '../../types.d';
import { AppState } from '../../store/typesafeConfig';

interface NavbarProps {
  account?: IUserData
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Container>
      <Hamburger />
      <UserContainer>
        <Email>{props.account.email}</Email>
        <UserPhoto />
      </UserContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 5px 20px;
  border-bottom: 1px solid #ccc;
  background-color: white;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Email = styled.p`
  font: 13px sans-serif;
  color: gray;
  padding-right: 10px;
`
const mapStateToProps = (state: AppState): Object => {
  return {
    account: getAccountState(state),
  };
};

export default connect(mapStateToProps)(Navbar);
