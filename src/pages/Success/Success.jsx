import React from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { useStore } from "../../utils/store";

const SuccessPage = () => {
  const navigate = useNavigate();
  const { reset } = useStore();

  const handleRestart = () => {
    reset();

    navigate("/");
  };

  return (
    <Panel>
      <Text variant="title">Success!</Text>
      <Text>You should receive a confirmation email soon.</Text>
      <Button onClick={handleRestart}>Restart</Button>
    </Panel>
  );
};

export default SuccessPage;
