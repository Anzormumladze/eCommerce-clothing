import React from "react";
import SignIn from "../../components/sign-in/signIn";
import SignUp from "../../components/sign-up/signUp";
import "./sign-in-and-sign-up.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
