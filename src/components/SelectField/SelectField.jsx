import React from "react";
import PropTypes from "prop-types";
import styles from "./SelectField.module.css";

const SelectField = (props) => {
  const { name, value, children, ...restProps } = props;

  return (
    <div className={styles.Wrapper}>
      <select
        name={name}
        value={value}
        className={styles.Select}
        {...restProps}
      >
        {children}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
};

export default SelectField;
