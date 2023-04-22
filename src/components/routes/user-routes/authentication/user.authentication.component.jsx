import React, { useEffect } from "react";
// import {
//   auth,
//   SignInWithGoogle,
//   createUserDocumentFromAuth,
// } from "../../../../utils/firebase.utils.js";
// import { getRedirectResult } from "firebase/auth";
import "./user.authentication.styles.scss";
import UserSignUp from "../sign-up/user.sign-up.component";
import UserSignIn from "../sign-in/user.sign-in.component";

const UserAuthentication = () => {
  // useEffect(() => {
  //   async function redirect() {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   redirect();
  // }, []);
  return (
    <div className="authentication-container">
      <UserSignIn />
      <UserSignUp />
    </div>
  );
};

export default UserAuthentication;
