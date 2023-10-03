import React from "react";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const SignUpPage = () => {
  return (
    <Panel>
      <Text variant="title">Sign Up</Text>
      <form noValidate>
        <TextField placeholder="First Name" name="firstName" type="text" />
        <TextField placeholder="Email" name="email" type="email" />
        <TextField placeholder="Password" name="password" type="password" />
        <Button type="submit">Next</Button>
      </form>
    </Panel>
  );
};

export default SignUpPage;
