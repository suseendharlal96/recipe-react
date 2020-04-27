import React, { Component } from "react";

import RecipeList from "./RecipeList/RecipeList";
import RecipeDetail from "./RecipeDetail/RecipeDetail";

class Recipes extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <RecipeList />
        </div>
        <div className="col-md-6">
          <RecipeDetail />
        </div>
      </div>
    );
  }
}

export default Recipes;
