import React, { useContext } from "react";

// import RecipeProvider from "../../../../shared/Context";
// import { recipeContext } from "../../../../shared/Context";

const RecipeItem = (props) => {
  return (
    <div className="row" onClick={props.selected}>
      <div className="col-12">
        <div style={{ cursor: "pointer" }} className="list-group-item clearfix">
          <div className="float-left">
            <h4 className="list-group-item-heading">{props.name} </h4>
            <p className="list-group-item-text"> {props.description} </p>
          </div>
          <span className="float-right">
            <img
              src={props.image}
              alt={props.name}
              className="img-responsive"
              style={{ maxHeight: "50px" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
