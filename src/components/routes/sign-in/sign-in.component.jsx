import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign-in.styles.scss";
import {
  SignInWithGoogle,
  userSignInWithEmail,
} from "../../../utils/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../../buttons/button.component";

const SignIn = () => {
  const navigate = useNavigate();
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await userSignInWithEmail(email, password);
      navigate("/dashboard");
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password for email!");
          break;
        case "auth/user-not-found":
          alert("User not found!");
          break;
        default:
          console.error(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
