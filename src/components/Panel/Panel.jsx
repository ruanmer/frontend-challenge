import React from "react";
import PropTypes from "prop-types";
import styles from "./Panel.module.css";

const Panel = ({ children }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Panel}>{children}</div>
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
};

export default Panel;
