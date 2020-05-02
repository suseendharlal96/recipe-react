import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import RecipeInput from "../../../component/RecipeInput/RecipeInput";

const RecipeEdit = (props) => {
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
    imagePath: {
      elementType: "input",
      label: "Image URL",
      elementConfig: {
        type: "text",
        placeholder: "imageURL",
        name: "image",
      },
      value: "",
      validation: {
        isRequired: true,
      },
      valid: false,
      touched: false,
    },
    description: {
      elementType: "textarea",
      label: "description",
      elementConfig: {
        type: "textarea",
        placeholder: "description",
        name: "description",
      },
      value: "",
      validation: {
        isRequired: true,
      },
      valid: false,
      touched: false,
    },
  });

  const [ingredients, setIngredients] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formIsValid, setformIsValid] = useState(false);
  useEffect(() => {
    console.log(props);
    if (props.location.pathname !== "/recipe/new") {
      setEditForm(+props.match.params.id);
      // initIngredientForm();
    } else {
      setNewForm();
    }
  }, [props.pathname]);

  const setNewForm = () => {
    let obj = { ...orderForm };
    for (let key in obj) {
      obj[key].value = "";
      obj[key].valid = "";
      obj[key].touched = false;
    }
    setOrderForm(obj);
    if (ingredients && ingredients.length) {
      ingredients.length = 0;
      setIngredients(ingredients);
    }
    setformIsValid(false);
    if (editIndex >= 0 || editIndex !== null) {
      setEditIndex(null);
    }
  };

  const setEditForm = (index) => {
    setEditIndex(+index);
    let a = {};
    console.log(index);
    a = props.recipes.find((data, i) => i === index);
    console.log(a);
    if (a) {
      let obj = { ...orderForm };
      for (let key in obj) {
        obj[key].value = a[key];
        obj[key].valid = true;
      }
      const arr = [];
      a["ingredients"].forEach((ings) => {
        arr.push({
          name: {
            value: ings["name"],
            valid: true,
            touched: true,
            validation: { isRequired: true },
          },
          amount: {
            value: +ings["quantity"],
            valid: true,
            touched: true,
            validation: { isRequired: true, pattern: true },
          },
        });
      });
      console.log(arr);
      setOrderForm(obj);
      setformIsValid(true);
      setIngredients(arr);
    } else {
      props.history.push("/recipe");
    }
  };

  const onAddIngredient = () => {
    const a = {
      name: {
        value: "",
        valid: false,
        touched: false,
        validation: { isRequired: true },
      },
      amount: {
        value: "",
        valid: false,
        touched: false,
        validation: { isRequired: true, pattern: true },
      },
    };
    const b = [...ingredients];
    console.log(b);
    b.push(a);
    console.log(b);
    // console.log(ingredients);
    setformIsValid(false);
    setIngredients(b);
  };

  const cancelRecipe = (index) => {
    const a = [...ingredients];
    const b = a.filter((data, i) => i !== index);
    setIngredients(b);
    let formIsValid = true;
    if (b && b.length) {
      b.forEach((ings, index) => {
        console.log(ings);
        formIsValid = ings.name.valid && ings.amount.valid && formIsValid;
      });
    }
    setformIsValid(formIsValid);
  };

  const cancelData = () => {
    if (editIndex >= 0 && editIndex !== null) {
      props.history.goBack();
    } else {
      props.history.push("/recipe");
    }
  };

  const checkValidity = (value, rules) => {
    console.log(12, value, rules);
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
    console.log(formIsValid);
    if (ingredients && ingredients.length) {
      ingredients.forEach((ings, index) => {
        formIsValid = ings.name.valid && ings.amount.valid && formIsValid;
      });
    }
    setOrderForm(copy);
    setformIsValid(formIsValid);
  };

  const ingredientInputHandler = (event, field, index) => {
    console.log(index, event.target.value);
    const ingCopy = [...ingredients];
    ingCopy[index][field].value = event.target.value;
    ingCopy[index][field].valid = checkValidity(
      ingCopy[index][field].value,
      ingCopy[index][field]["validation"]
    );
    ingCopy[index][field].touched = true;
    let formIsValid = true;
    if (ingredients && ingredients.length) {
      ingredients.forEach((ings, index) => {
        formIsValid = ings.name.valid && ings.amount.valid && formIsValid;
      });
    }
    setformIsValid(formIsValid);
    setIngredients(ingCopy);
  };

  let formData = [];
  for (let key in orderForm) {
    formData.push({ id: key, inputData: orderForm[key] });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(orderForm);
    const ingCopy = [...ingredients];
    console.log(ingCopy);
    const obj = { ...orderForm, ingCopy };
    let recipeObj = {};
    for (let key in obj) {
      if (obj[key].value) {
        recipeObj[key] = obj[key].value;
      }
      recipeObj["id"] = Math.random();
      // recipeObj["ingredients"] = obj["ingredients"];
    }
    let ingredientsArr = [];
    obj["ingCopy"].forEach((ings) => {
      ingredientsArr.push({
        name: ings["name"].value,
        quantity: ings["amount"].value,
      });
    });
    // const ingredients = ingredientsArr;
    recipeObj = { ...recipeObj, ingredientsArr };
    console.log(recipeObj);
    if (editIndex >= 0 && editIndex !== null) {
      console.log("edit");
      props.editRecipe(editIndex, recipeObj);
      props.history.goBack();
    } else {
      console.log("add");
      props.addRecipe(recipeObj);
      props.history.push("/recipe");
    }
  };

  let editComponent = (
    <form onSubmit={submitHandler}>
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
          <button className="btn btn-danger" type="button" onClick={cancelData}>
            Cancel
          </button>
        </div>
      </div>
      {formData.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <RecipeInput
              elementType={data.inputData.elementType}
              elementConfig={data.inputData.elementConfig}
              value={data.inputData.value}
              invalid={!data.inputData.valid}
              label={data.inputData.label}
              shouldValidate={data.inputData.validation}
              touched={data.inputData.touched}
              changed={(event) => inputChangedHandler(event, data.id)}
            />
          </React.Fragment>
        );
      })}
      <div className="row">
        <div className="col-12">
          {orderForm.imagePath.value ? (
            <img
              alt="recipe"
              src={orderForm.imagePath.value}
              style={{ maxHeight: "150px" }}
              className="img-responsive"
            />
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {ingredients && ingredients.length
            ? ingredients.map((ings, index) => {
                return (
                  <div
                    key={index}
                    style={{ marginTop: "10px" }}
                    className="row"
                  >
                    <div className="col-7">
                      <input
                        type="text"
                        placeholder="Name"
                        value={ings.name.value}
                        className="form-control"
                        style={
                          !ings.name.valid &&
                          ings.name.validation &&
                          ings.name.touched
                            ? {
                                border: "1px solid red",
                                backgroundColor: "#FDA49A",
                              }
                            : null
                        }
                        name="name"
                        onChange={(event) =>
                          ingredientInputHandler(event, "name", index)
                        }
                      />
                    </div>
                    <div className="col-3">
                      <input
                        placeholder="quantity "
                        type="number"
                        value={ings.amount.value}
                        className="form-control"
                        autoComplete="false"
                        style={
                          !ings.amount.valid &&
                          ings.amount.validation &&
                          ings.amount.touched
                            ? {
                                border: "1px solid red",
                                backgroundColor: "#FDA49A",
                              }
                            : null
                        }
                        name="amount"
                        onChange={(event) =>
                          ingredientInputHandler(event, "amount", index)
                        }
                      />
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        onClick={() => cancelRecipe(index)}
                        className="btn btn-danger"
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-success"
            onClick={onAddIngredient}
          >
            Add Ingredient
          </button>
        </div>
      </div>
    </form>
  );
  // if (editMode) {
  //   editComponent = <p>Edit Mode</p>;
  // }
  return <div>{editComponent}</div>;
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipeReducer.recipe,
  };
};

export default connect(mapStateToProps)(RecipeEdit);
