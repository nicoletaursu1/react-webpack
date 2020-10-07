import React, { useState } from "react";

import SignForm from '../components/SignForm';

const SignupPage = () => {
  return (
    <div>
      <SignForm signedUp={false} />
    </div>
  )
}

export default SignupPage;
