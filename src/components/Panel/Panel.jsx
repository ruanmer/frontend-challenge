import React from "react";
import PropTypes from "prop-types";
import styles from "./Panel.module.css";
import Loader from "../Loader";

const Panel = (props) => {
  const { children, loading = false } = props;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Panel}>{loading ? <Loader /> : children}</div>
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

export default Panel;
