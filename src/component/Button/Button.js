import React from "react";

import classes from "./Button.css";
const button = (props) => {
  return (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      className={[classes.Button, classes[props.btntype]].join(" ")}>
      {props.children}
    </button>
  );
};

export default button;
