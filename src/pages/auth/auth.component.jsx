import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";
import "./auth.styles.scss";

const AuthPage = () => (
  <div className="auth-page">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthPage;
