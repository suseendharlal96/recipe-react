import React from "react";
import { Link } from "react-router-dom";

const RecipeDetail = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <img
            src={props.recipe.imagePath}
            alt={props.recipe.imagePath}
            className="img-responsive"
            style={{ maxHeight: "200px" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1>{props.recipe.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={props.addToShopping}
              >
                To shopping List
              </div>
              <div className="dropdown-item" style={{ cursor: "pointer" }}>
                Edit Recipe
              </div>
              <div className="dropdown-item" style={{ cursor: "pointer" }}>
                Delete Recipe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">{props.recipe.description}</div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {props.recipe.ingredients.map((ing, index) => {
              return (
                <li key={index} className="list-group-item">
                  {ing.name} - {ing.quantity}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipeDetail;
