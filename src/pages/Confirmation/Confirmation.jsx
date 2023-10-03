import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { useStore } from "../../utils/store";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { data } = useStore();

  const handleSubmit = useCallback(() => {
    console.log("Submitted", data);
  }, []);

  return (
    <Panel>
      <Text variant="title">Confirmation</Text>
      <Text>First Name: {data.firstName || "-"}</Text>
      <Text>Email: {data.email || "-"}</Text>
      <Text>Password: {data.password ? "****" : "-"}</Text>
      <Text>Favorite Color: {data.favoriteColor || "-"}</Text>
      <Text>
        Terms and Conditions:{" "}
        {data.termsAndConditions === "on" ? "Agreed" : "Not agreed"}
      </Text>
      <Button color="secondary" onClick={() => navigate("/more-info")}>
        Back
      </Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </Panel>
  );
};

export default ConfirmationPage;
