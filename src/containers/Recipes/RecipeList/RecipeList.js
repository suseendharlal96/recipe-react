import React, { useState } from "react";
import { connect } from "react-redux";

import * as action from "../../../store/actions/index";
import RecipeItem from "./RecipeItem/RecipeItem";

const RecipeList = (props) => {
  let recipe = (
    <React.Fragment>
      {props.recipes.map((data, index) => {
        return (
          <RecipeItem
            selected={() => props.selectedRecipe(data.id)}
            key={index}
            name={data.name}
            ingredients={data.ingredients}
            description={data.description}
            image={data.imagePath}
          />
        );
      })}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-success">New Recipe</button>
        </div>
      </div>
      <hr />
      {recipe}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipeReducer.recipe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedRecipe: (key) => dispatch(action.selectedRecipes(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
