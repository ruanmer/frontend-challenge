import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Text.module.css";

export default function Text(props) {
  const { variant = "body", children } = props;
  const Component = {
    body: "p",
    title: "h1",
  }[variant];

  return (
    <Component className={classNames(styles.Text, styles[variant])}>
      {children}
    </Component>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["body", "title"]),
};
