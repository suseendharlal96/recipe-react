import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {

  let inputElement = null;
  const inputClasses = [styles.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.Invalid);
  }

  switch (props.elementConfig.type) {
    case "text":
      inputElement = (
        <React.Fragment>
          <div className="col-sm-5 form-group">
            <input
              className={inputClasses.join(" ")}
              {...props.elementConfig}
              name={props.elementConfig.name}
              value={props.value}
              onChange={props.changed}
            />
          </div>
        </React.Fragment>
      );
      break;
    case "number":
      inputElement = (
        <React.Fragment>
          <div className="col-sm-2 form-group">
            <input
              type={props.elementConfig.type}
              className={inputClasses.join(" ")}
              name={props.elementConfig.name}
              {...props.elementConfig}
              value={props.value}
              onChange={props.changed}
            />
          </div>
        </React.Fragment>
      );
      break;
    default:
      inputElement = (
        <React.Fragment>
          <input
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            name={props.elementConfig.name}
            value={props.value}
            onChange={props.changed}
          />
        </React.Fragment>
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label} htmlFor={props.elementConfig.name}>
        {props.label}
      </label>
      <div className="row">{inputElement}</div>
    </div>
  );
};

export default Input;
