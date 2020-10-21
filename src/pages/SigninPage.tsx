import React, { useState } from "react";
import styled from 'styled-components';

import SignForm from '../components/SignForm/Form';

const SigninPage = () => {
  return (
    <Container>
      <SignForm signedUp={true} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-self: center;
`
export default SigninPage;