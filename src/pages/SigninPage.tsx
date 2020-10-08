import React, { useState } from "react";

import SignForm from '../components/SignForm/SignForm';

const SigninPage = () => {
  return (
    <div>
      <SignForm signedUp={true} />
    </div>
  )
}

export default SigninPage;