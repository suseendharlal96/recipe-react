import React from "react";
import { Link } from "react-router-dom";

const recipeDetail = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <img src="" alt="" className="img-responsive" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1>Recipe Name</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle">
              Manage Recipe <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/">To Shopping List</Link>
              </li>
              <li>
                <Link to="/">Edit Recipe</Link>
              </li>
              <li>
                <Link to="/">Delete Recipe</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">Description</div>
      </div>
      <div className="row">
        <div className="col-12">Ingredients</div>
      </div>
    </React.Fragment>
  );
};

export default recipeDetail;
