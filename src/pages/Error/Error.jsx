import React from "react";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import Button from "../../components/Button";

const ErrorPage = () => {
  return (
    <Panel>
      <Text variant="title">Error!</Text>
      <Text>Uh oh, something went wrong. Please try again later.</Text>
      <Button>Restart</Button>
    </Panel>
  );
};

export default ErrorPage;
