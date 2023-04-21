import React, { useEffect } from "react";
import {
  auth,
  SignInWithGoogle,
  createUserDocumentFromAuth,
} from "../../../utils/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import "./authentication.styles.scss";
import SignUp from "../sign-up/sign-up.component";

const Authentication = () => {
  useEffect(() => {
    async function redirect() {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    }
    redirect();
  }, []);
  return (
    <div>
      <button onClick={SignInWithGoogle}>Google SignIn</button>
      <SignUp />
    </div>
  );
};

export default Authentication;
