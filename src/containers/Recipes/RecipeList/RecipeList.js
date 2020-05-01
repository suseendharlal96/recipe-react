import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as action from "../../../store/actions/index";
import RecipeItem from "./RecipeItem/RecipeItem";

const RecipeList = (props) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    console.log(props);
    const a = props.location.pathname.split("/")[2];
    props.recipes.map((recipe, index) => {
      if (+a === index) {
        setActive(recipe.id);
      }
    });
  }, [props]);

  const selectedHandler = (id) => {
    setActive(id);
  };

  const IsActive = (id, props) => {
    console.log(active);
    console.log(id);
    return active === id;
  };

  const navigate = () => {
    props.history.push("/recipe/new");
    setActive(false);
  };

  let recipe = (
    <React.Fragment>
      {props.recipes.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <RecipeItem
              {...props}
              index={index}
              id={data.id}
              selected={(id) => selectedHandler(id)}
              isActive={IsActive(data.id, props)}
              name={data.name}
              ingredients={data.ingredients}
              description={data.description}
              image={data.imagePath}
            />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-success" onClick={navigate}>
            New Recipe
          </button>
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
