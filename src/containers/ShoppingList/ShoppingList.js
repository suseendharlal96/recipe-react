import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../store/actions/index";

import ShoppingEdit from "./ShoppingEdit/ShoppingEdit";

const ShoppingList = (props) => {
  const [recipe, setselectedRecipe] = useState();
  const [activeIndex, setActiveIndex] = useState();

  const addIngredientsHandler = (data) => {
    let obj = { ...data, price: 100 };
    props.addIngredient(obj);
  };
  const editIngredientHandler = (data, index) => {
    let obj = { ...data, price: 100 };
    console.log(obj, index);
    props.editIngredient(data, index);
  };

  const deleteIngredientHandler = (index) => {
    props.deleteIngredient(index);
  };

  const selectedRecipe = (data, index) => {
    const obj = { ...data, index: index };
    setselectedRecipe(obj);
    setActiveIndex(index);
    console.log(data);
  };

  const clearShopForm = () => {
    setActiveIndex(-1);
  };

  const isActive = (i) => {
    return activeIndex === i;
  };

  let ingredients = (
    <React.Fragment>
      {props.ingredients.map((data, index) => {
        return (
          <div
            onClick={() => selectedRecipe(data, index)}
            key={index}
            className={
              isActive(index) ? "list-group-item active" : "list-group-item"
            }
            style={{ cursor: "pointer" }}
          >
            {data.name} ({data.amount})
          </div>
        );
      })}
    </React.Fragment>
  );

  let shoppingComponent = (
    <div>
      <p>Please login to continue..</p>
      <NavLink to="/auth">Click to login!</NavLink>
    </div>
  );

  if (props.auth) {
    shoppingComponent = (
      <div className="row">
        <div className="col-10">
          <ShoppingEdit
            selectedRecipe={recipe}
            clearForm={clearShopForm}
            addIngredients={(data) => addIngredientsHandler(data)}
            editIngredient={(data, index) => editIngredientHandler(data, index)}
            deleteIngredient={(index) => deleteIngredientHandler(index)}
          />
          <hr />
          <ul className="list-group">{ingredients}</ul>
        </div>
      </div>
    );
  }

  return shoppingComponent;
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.shopReducer.ingredients,
    auth: state.authReducer.idToken !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (data) => dispatch(action.addIngredient(data)),
    editIngredient: (data, index) =>
      dispatch(action.editIngredient(data, index)),
    deleteIngredient: (data) => dispatch(action.deleteIngredient(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
