import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  const { name, value, label, ...restProps } = props;

  return (
    <div className={styles.Wrapper}>
      <label>
        <input
          name={name}
          value={value}
          type="checkbox"
          className={styles.Checkbox}
          {...restProps}
        />
        <span className={styles.Label}>{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.node,
};

export default Checkbox;
