import React, { useEffect, useState } from "react";

import RecipeList from "./RecipeList/RecipeList";
import RecipeDetail from "./RecipeDetail/RecipeDetail";

const Recipes = (props) => {
  const [recipeDetail, setRecipeDetail] = useState(null);

  useEffect(() => {
    console.log(props);
  }, []);

  const setDetailHandler = (data) => {
    console.log(data);
    setRecipeDetail(data);
  };

  let recipeDetailComponent = <p>Please select a recipe!</p>;
  if (recipeDetail) {
    recipeDetailComponent = <RecipeDetail recipe={recipeDetail} />;
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <RecipeList {...props} selectRecipe={setDetailHandler} />
      </div>
      <div className="col-md-6">{recipeDetailComponent}</div>
    </div>
  );
};

export default Recipes;
