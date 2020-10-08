import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";

const SigninPage = () => {
  return (
    <Background>
      <Logo />
      <Description>Chinese B Pay</Description>
      <Link style={{textDecoration: 'none'}} to="/signup">
        <SignUpLink>
          <h4>Sign up</h4>
        </SignUpLink>
      </Link>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
const Description = styled.h5`
  font: 14px sans-serif;
  color: white;
  margin: 10px;
`;
const SignUpLink = styled.div`
    h4 {
        color: #ccc;
        margin: 10px;
        &:hover {
            color: gray;
        }
    }
`
export default SigninPage;
