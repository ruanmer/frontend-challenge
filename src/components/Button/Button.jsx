import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button(props) {
  const { children, type = "button", color = "primary", ...restProps } = props;

  return (
    <button
      type={type}
      className={classNames(styles.Button, styles[color])}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};
