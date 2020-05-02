import React from "react";

import styles from "./RecipeInput.module.css";

const RecipeInput = (props) => {
  let inputElement = null;
  const inputClasses = [styles.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          name={props.elementConfig.name}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          name={props.elementConfig.name}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label
        className={styles.Label}
        style={{ color: " var(--primaryText)" }}
        htmlFor={props.elementConfig.name}
      >
        {props.label}
      </label>
      <div className="row">{inputElement}</div>
    </div>
  );
};

export default RecipeInput;
