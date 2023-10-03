import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { useStore } from "../../utils/store";
import { signUp } from "../../services/auth";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { data } = useStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await signUp(data);

      navigate("/success");
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <Panel loading={loading}>
      <Text variant="title">Confirmation</Text>
      <Text>First Name: {data.name || "-"}</Text>
      <Text>Email: {data.email || "-"}</Text>
      <Text>Password: {data.password ? "****" : "-"}</Text>
      <Text>Favorite Color: {data.color || "-"}</Text>
      <Text>Terms and Conditions: {data.terms ? "Agreed" : "Not agreed"}</Text>
      <Button color="secondary" onClick={() => navigate("/more-info")}>
        Back
      </Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </Panel>
  );
};

export default ConfirmationPage;
