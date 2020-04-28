import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../../store/actions/index";

import ShoppingEdit from "./ShoppingEdit/ShoppingEdit";

const ShoppingList = (props) => {
  // useEffect(()=>{

  // })

  const addIngredientsHandler = (data) => {
    props.addIngredient(data);
  };

  let ingredients = (
    <React.Fragment>
      {props.ingredients.map((data, index) => {
        return (
          <Link
            to="/"
            key={index}
            className="list-group-item"
            style={{ cursor: "pointer" }}
          >
            {data.name} ({data.amount})
          </Link>
        );
      })}
    </React.Fragment>
  );
  return (
    <div className="row">
      <div className="col-10">
        <ShoppingEdit addIngredients={(data) => addIngredientsHandler(data)} />
        <hr />
        <ul className="list-group">{ingredients}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.shopReducer.ingredients,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (data) => dispatch(action.addIngredient(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
