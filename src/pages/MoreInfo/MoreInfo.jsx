import React from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import SelectField from "../../components/SelectField";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

const MoreInfoPage = () => {
  const navigate = useNavigate();

  return (
    <Panel>
      <Text variant="title">Additional Info</Text>
      <form noValidate>
        <SelectField>
          <option value="">Select your favorite color</option>
        </SelectField>
        <Checkbox label="I agree to Terms and Conditions" />
        <Button onClick={() => navigate("/")} color="secondary">
          Back
        </Button>
        <Button type="submit">Next</Button>
      </form>
    </Panel>
  );
};

export default MoreInfoPage;
