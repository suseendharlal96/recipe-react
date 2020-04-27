import React, { useState } from "react";

import RecipeItem from "./RecipeItem/RecipeItem";
import { Link } from "react-router-dom";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([
    {
      name: "recipe",
      description: "good one",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
    },
    {
      name: "recipe2",
      description: "good one2",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
    },
  ]);

  let recipe = (
    <React.Fragment>
      {recipes.map((data, index) => {
        return (
          <RecipeItem
            selected={() => props.selectRecipe(data)}
            key={index}
            name={data.name}
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

export default RecipeList;
