import React from "react";

import styles from "./Button.module.css";
const button = (props) => {
  return (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      className={[styles.Button, styles[props.btntype]].join(" ")}>
      {props.children}
    </button>
  );
};

export default button;
