import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Logo from "../Logo";
import CategoryText from "./CategoryText";
import List from "./List";
import ListItem from "./ListItem";
import CustomLink from "../Link";
import colors from "../../constants/colors";
import actions from "../../store/actions";

interface SidebarProps {
  authorized?: boolean
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(actions.logout());
    sessionStorage.removeItem("token");
  };

  return (
    <Container>
      { !props.authorized && <Redirect to="/login" /> }
      <div>
        <Logo />
        <List>
          <ListItem icon="fa fa-user">My profile</ListItem>
          <CategoryText>Options</CategoryText>
          <ListItem icon="fa fa-credit-card">Payments</ListItem>
          <ListItem selected icon="fa fa-pencil-square-o">
            <CustomLink to="/dashboard">Update information</CustomLink>
          </ListItem>
          <ListItem icon="fa fa-cog">Settings</ListItem>
        </List>
      </div>

      <List>
        <ListItem icon="fa fa-sign-out" onClick={logout}>
          Log out
        </ListItem>
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.primary};
  padding: 20px 20px;
`;

export default Sidebar;
