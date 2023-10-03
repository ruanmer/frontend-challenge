import React from "react";
import PropTypes from "prop-types";
import styles from "./Panel.module.css";

export default function Panel({ children }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Panel}>{children}</div>
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
};
