import React, { useState } from "react";
import styled from 'styled-components';

import Form from '../components/SignForm/Form';

const SignupPage = () => {
  return (
    <Container>
      <Form signedUp={false} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-self: center;
`

export default SignupPage;
