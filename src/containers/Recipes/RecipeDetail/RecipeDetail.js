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
              <Link to="/" className="dropdown-item">
                To Shopping List
              </Link>
              <Link to="/" className="dropdown-item">
                Edit Recipe
              </Link>
              <Link to="/" className="dropdown-item">
                Delete Recipe
              </Link>
            </div>
          </div>
          {/* <div className="btn-group open">
            <button type="button" className="btn btn-primary dropdown-toggle">
              Manage Recipe <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
              </li>
              <li>
              </li>
              <li>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">{props.recipe.description}</div>
      </div>
      <div className="row">
        <div className="col-12">Ingredients</div>
      </div>
    </React.Fragment>
  );
};

export default RecipeDetail;
