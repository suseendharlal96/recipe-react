import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const RecipeDetail = (props) => {
  const [detailed, setData] = useState({});
  useEffect(() => {
    if (props.match.params.id) {
      let obj = {};
      props.recipes.forEach((data, index) => {
        if (index === +props.match.params.id) {
          obj = data;
        }
        setData(obj);
      });
    }
  }, [props, detailed]);

  const navigateEdit = () => {
    props.history.push(`/recipe/${props.match.params.id}/edit`);
  };

  let detailComponent = (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <img
            src={detailed && detailed.imagePath ? detailed.imagePath : "image"}
            alt={detailed && detailed.imagePath ? detailed.imagePath : "image"}
            className="img-responsive"
            style={{ maxHeight: "200px" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 style={{ color: " var(--primaryText)" }}>
            {detailed && detailed.name ? detailed.name : null}
          </h1>
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
              Manage Recipe
            </button>
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => props.addToShopping(detailed.ingredients)}
              >
                To shopping List
              </div>
              <div
                className="dropdown-item"
                onClick={navigateEdit}
                style={{ cursor: "pointer" }}
              >
                Edit Recipe
              </div>
              <div
                className="dropdown-item"
                onClick={() => props.deleteRecipe(+props.match.params.id)}
                style={{ cursor: "pointer" }}
              >
                Delete Recipe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {detailed && detailed.description ? detailed.description : null}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {detailed && detailed.ingredients
              ? detailed.ingredients.map((ing, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      {ing.name} - {ing.quantity}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );

  return <div>{detailComponent}</div>;
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipeReducer.recipe,
  };
};

export default connect(mapStateToProps)(RecipeDetail);
