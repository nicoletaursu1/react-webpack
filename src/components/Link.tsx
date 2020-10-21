import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  to: string;
}

const CustomLink: React.FC<LinkProps> = (props) => {
  return <StyledLink to={props.to}>{props.children}</StyledLink>;
};

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default CustomLink;
