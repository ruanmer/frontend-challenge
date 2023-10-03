import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../../components/Panel";
import Text from "../../components/Text";
import SelectField from "../../components/SelectField";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { fetchColors } from "../../services/colors";
import { useStore } from "../../utils/store";

const MoreInfoPage = () => {
  const navigate = useNavigate();
  const { add } = useStore();
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const colors = await fetchColors();

      setColors(colors);
      setLoading(false);
    };

    fetchData();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(formElement);

    if (!formData.get("color") || !formData.has("terms")) {
      setErrorMessage("All fields are required!");

      return;
    }

    const data = Object.fromEntries(formData);

    add(data);

    navigate("/confirmation");
  };

  return (
    <Panel loading={loading}>
      <Text variant="title">Additional Info</Text>
      {errorMessage && <Text color="error">{errorMessage}</Text>}
      <form onSubmit={onSubmit} name="moreInfoForm" noValidate>
        <SelectField name="color">
          <option value="">Select your favorite color</option>
          {colors.map((color) => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </SelectField>
        <Checkbox
          name="terms"
          value="on"
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
