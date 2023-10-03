import React from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import Button from "../../components/Button";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <Panel>
      <Text variant="title">Confirmation</Text>
      <Text>First Name: -</Text>
      <Text>Email: -</Text>
      <Text>Password: ****</Text>
      <Text>Favorite Color: -</Text>
      <Text>Terms and Conditions: Agreed</Text>
      <Button color="secondary" onClick={() => navigate("/more-info")}>
        Back
      </Button>
      <Button>Submit</Button>
    </Panel>
  );
};

export default ConfirmationPage;
