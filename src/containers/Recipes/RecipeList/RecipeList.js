import React, { useState } from "react";

import RecipeItem from "./RecipeItem/RecipeItem";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([
    {
      name: "recipe",
      description: "good one",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
    },
  ]);
  let recipe = (
    <React.Fragment>
      {recipes.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="float-left">
              <h4 className="list-group-item-heading"> {data.name} </h4>
              <p className="list-group-item-text"> {data.description} </p>
            </div>
            <span className="float-right">
              <img
                src={data.imagePath}
                alt={data.name}
                className="img-responsive"
                style={{ maxHeight: "50px" }}
              />
            </span>
          </React.Fragment>
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
      <div className="row">
        <div className="col-12">
          <Link to="/details" className="list-group-item clearfix">
            {recipe}
          </Link>
          <RecipeItem />
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipeList;
