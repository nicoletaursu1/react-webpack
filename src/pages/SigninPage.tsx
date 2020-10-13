import React, { useState } from "react";

import SignForm from '../components/SignForm/Form';

const SigninPage = () => {
  return (
    <div>
      <SignForm signedUp={true} />
    </div>
  )
}

export default SigninPage;