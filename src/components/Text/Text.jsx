import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Text.module.css";

const Text = (props) => {
  const { variant = "body", color = "text", children } = props;
  const Component = {
    body: "p",
    title: "h1",
  }[variant];

  return (
    <Component
      className={classNames(styles.Text, styles[variant], styles[color])}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["body", "title"]),
  color: PropTypes.oneOf(["text", "error"]),
};

export default Text;
