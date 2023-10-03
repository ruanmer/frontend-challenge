import React from "react";
import PropTypes from "prop-types";
import styles from "./SelectField.module.css";

const SelectField = (props) => {
  const { name, children, ...restProps } = props;

  return (
    <div className={styles.Wrapper}>
      <select name={name} className={styles.Select} {...restProps}>
        {children}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

export default SelectField;
