import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as action from "../../store/actions/index";
import RecipeList from "./RecipeList/RecipeList";
import RecipeDetail from "./RecipeDetail/RecipeDetail";

const Recipes = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const addToShoppingHandler = (data) => {
    console.log(data);
    props.addToShopping(data);
  };

  let recipeDetailComponent = <p>Please select a recipe!</p>;
  if (props.recipeDetail) {
    recipeDetailComponent = (
      <RecipeDetail
        recipe={props.recipeDetail}
        addToShopping={() =>
          addToShoppingHandler(props.recipeDetail.ingredients)
        }
      />
    );
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <RecipeList {...props} />
      </div>
      <div className="col-md-6">{recipeDetailComponent}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipeDetail: state.recipeReducer.selectedRecipe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToShopping: (data) => dispatch(action.addToShopList(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
