import React, { useState } from "react";

import SignForm from '../components/SignForm/SignForm';

const SignupPage = () => {
  return (
    <div>
      <SignForm signedUp={false} />
    </div>
  )
}

export default SignupPage;
