import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import SelectField from "../../components/SelectField";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

const MoreInfoPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(formElement);

    if (!formData.get("favoriteColor") || !formData.has("termsAndConditions")) {
      setErrorMessage("All fields are required!");

      return;
    }
  };

  return (
    <Panel>
      <Text variant="title">Additional Info</Text>
      {errorMessage && <Text color="error">{errorMessage}</Text>}
      <form onSubmit={onSubmit} name="moreInfoForm" noValidate>
        <SelectField name="favoriteColor">
          <option value="">Select your favorite color</option>
        </SelectField>
        <Checkbox
          name="termsAndConditions"
          label="I agree to Terms and Conditions"
        />
        <Button onClick={() => navigate("/")} color="secondary">
          Back
        </Button>
        <Button type="submit">Next</Button>
      </form>
    </Panel>
  );
};

export default MoreInfoPage;
