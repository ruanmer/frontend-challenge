import React from "react";
import PropTypes from "prop-types";
import styles from "./TextField.module.css";

const TextField = (props) => {
  const { placeholder, name, type = "text", ...restProps } = props;

  return (
    <div className={styles.Wrapper}>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        className={styles.Input}
        {...restProps}
      />
    </div>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
};

export default TextField;
