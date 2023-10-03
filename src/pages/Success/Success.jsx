import React from "react";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import Button from "../../components/Button";

const SuccessPage = () => {
  return (
    <Panel>
      <Text variant="title">Success!</Text>
      <Text>You should receive a confirmation email soon.</Text>
      <Button>Restart</Button>
    </Panel>
  );
};

export default SuccessPage;
