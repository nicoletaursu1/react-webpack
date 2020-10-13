import React, { useState } from "react";

import Form from '../components/SignForm/Form';

const SignupPage = () => {
  return (
    <div>
      <Form signedUp={false} />
    </div>
  )
}

export default SignupPage;
