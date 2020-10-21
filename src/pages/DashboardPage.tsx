import React, { useState, useEffect } from "react";
import { Redirect} from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { AppState } from "../store/typesafeConfig";
import { getAuthorizedState, getSidebarState } from "../store/selectors/index";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import Account from "../components/Dashboard/Content/AccountContent";

interface DashboardProps {
  isOpen?: boolean,
  authorized?: boolean
}

const DashboardPage: React.FC<DashboardProps> = (props) => {

  return (
    <Container isOpen={props.isOpen}>
      {!props.authorized && <Redirect to="/login" />}
      {props.isOpen && <Sidebar authorized={props.authorized}/>}
      <Wrapper>
        <Navbar />
        <Account />
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state: AppState): Object => {
  return {
    isOpen: getSidebarState(state),
    authorized: getAuthorizedState(state)
  };
};

const Container = styled.div<DashboardProps>`
  display: grid;
  height: 100vh;
  grid-template-columns: ${(props) => (props.isOpen ? "1fr 5fr" : "6fr")};
`;
const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 9fr;
`

export default connect(mapStateToProps)(DashboardPage);
