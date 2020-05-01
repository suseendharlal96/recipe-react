import React, { useState, useEffect } from "react";

import Input from "../../../component/Input/Input";

const ShoppingEdit = (props) => {
  // const [name, setName] = useState();
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      label: "Name",
      elementConfig: {
        type: "text",
        placeholder: "Name",
        autoFocus: "autoFocus",
        name: "name",
      },
      value: "",
      validation: {
        isRequired: true,
      },
      valid: false,
      touched: false,
    },
    amount: {
      elementType: "input",
      label: "Amount",
      elementConfig: {
        type: "number",
        placeholder: "amount",
        name: "amount",
      },
      value: "",
      validation: {
        isRequired: true,
        pattern: true,
      },
      valid: false,
      touched: false,
    },
  });

  const [formIsValid, setformIsValid] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // <editFo></editFo>rmData(props.selectedRecipe);
    console.log(21, props.selectedRecipe);
    if (props.selectedRecipe) {
      let obj = { ...orderForm };
      for (let key in obj) {
        obj[key].value = props.selectedRecipe[key];
        obj[key].valid = true;
      }
      setOrderForm(obj);
      setEditIndex(props.selectedRecipe.index);
      console.log(editIndex);
      setformIsValid(true);
    }
  }, [props.selectedRecipe]);

  // useEffect(() => {
  //   if (props.selectedRecipe && props.selectedRecipe.index) {
  //     setEditIndex(props.selectedRecipe["index"]);
  //   }
  // }, [props]);

  // const editFormData = (data) => {
  //   console.log(data);
  // };

  const clearForm = () => {
    let obj = { ...orderForm };
    for (let key in obj) {
      obj[key].value = "";
      obj[key].valid = false;
      obj[key].touched = false;
    }
    setOrderForm(obj);
    setEditIndex(null);
    setformIsValid(false);
    props.clearForm();
  };

  const deleteData = () => {
    props.deleteIngredient(editIndex);
    clearForm();
  };

  const checkValidity = (value, rules) => {
    console.log(12);
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.isRequired) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.pattern) {
      const pattern = new RegExp("^[1-9]+[0-9]*$");
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };

  const inputChangedHandler = (event, id) => {
    event.preventDefault();
    const copy = { ...orderForm };
    const deepCopy = { ...copy[id] };
    console.log(deepCopy);
    deepCopy.value = event.target.value;
    deepCopy.valid = checkValidity(deepCopy.value, deepCopy.validation);
    console.log(deepCopy.valid);
    deepCopy.touched = true;
    copy[id] = deepCopy;
    let formIsValid = true;
    for (let inputIdentifier in copy) {
      console.log(copy[inputIdentifier]);
      formIsValid = copy[inputIdentifier].valid && formIsValid;
    }
    setOrderForm(copy);
    setformIsValid(formIsValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let formValue = {};
    for (let values in orderForm) {
      formValue[values] = orderForm[values].value;
    }
    console.log(formValue);
    console.log("sub", editIndex);
    if (editIndex >= 0 && editIndex !== null) {
      console.log(formValue);
      props.editIngredient(formValue, editIndex);
    } else {
      props.addIngredients(formValue);
    }
    clearForm();
  };

  let formData = [];
  for (let key in orderForm) {
    formData.push({ id: key, inputData: orderForm[key] });
  }
  let form = (
    <form onSubmit={submitHandler}>
      {formData.map((data) => {
        return (
          <Input
            key={data.id}
            elementType={data.inputData.elementType}
            elementConfig={data.inputData.elementConfig}
            value={data.inputData.value}
            invalid={!data.inputData.valid}
            label={data.inputData.label}
            shouldValidate={data.inputData.validation}
            touched={data.inputData.touched}
            changed={(event) => inputChangedHandler(event, data.id)}
          />
        );
      })}
      <div className="row">
        <div className="col-12">
          <button
            disabled={!formIsValid}
            style={
              formIsValid
                ? { cursor: "pointer", marginRight: "5px" }
                : { cursor: "no-drop", marginRight: "5px" }
            }
            className="btn btn-success"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
          <button
            className="btn btn-danger"
            disabled={editIndex >= 0 && editIndex !== null ? false : true}
            style={
              editIndex >= 0 && editIndex !== null
                ? { cursor: "pointer", marginRight: "5px" }
                : { cursor: "no-drop", marginRight: "5px" }
            }
            type="button"
            onClick={deleteData}
          >
            Delete
          </button>
          <button
            className="btn btn-primary"
            style={{ marginRight: "5px" }}
            type="button"
            onClick={clearForm}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
  return (
    <div className="row">
      <div className="col-12">{form}</div>
    </div>
  );
};

export default ShoppingEdit;
