import React, { useState } from "react";
import { useNavigate } from "react-router";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { validateEmail } from "../../utils/validator";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(formElement);

    if (
      !formData.get("firstName") ||
      !formData.get("email") ||
      !formData.get("password")
    ) {
      setErrorMessage("All fields are required!");

      return;
    }

    if (!validateEmail(formData.get("email"))) {
      setErrorMessage("Email is invalid!");

      return;
    }

    navigate("/more-info");
  };

  return (
    <Panel>
      <Text variant="title">Sign Up</Text>
      {errorMessage && <Text color="error">{errorMessage}</Text>}
      <form onSubmit={onSubmit} name="signUpForm" noValidate>
        <TextField placeholder="First Name" name="firstName" type="text" />
        <TextField placeholder="Email" name="email" type="email" />
        <TextField placeholder="Password" name="password" type="password" />
        <Button type="submit">Next</Button>
      </form>
    </Panel>
  );
};

export default SignUpPage;
