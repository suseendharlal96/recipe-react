import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as action from "../../store/actions/index";
import RecipeList from "./RecipeList/RecipeList";
import RecipeDetail from "./RecipeDetail/RecipeDetail";
import RecipeEdit from "./RecipeEdit/RecipeEdit";
import { Route, Switch } from "react-router-dom";

const Recipes = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const addToShoppingHandler = (data) => {
    console.log(data);
    const a = [];
    data.forEach((recipe) => {
      a.push({ name: recipe.name, amount: +recipe.quantity, price: 100 });
    });
    console.log(a);
    props.addToShopping(a);
  };

  const addRecipeHandler = (data) => {
    console.log(data);
    const a = {
      id: "",
      name: "",
      imagePath: "",
      description: "",
      ingredients: [],
    };
    a.id = data["id"];
    a.name = data["name"];
    a.imagePath = data["imagePath"];
    a.description = data["description"];
    a.ingredients = data.ingredientsArr;
    props.addRecipe(a);
  };

  const editRecipeHandler = (index, data) => {
    console.log(index, data);
    const a = {
      id: "",
      name: "",
      imagePath: "",
      description: "",
      ingredients: [],
    };
    a.id = data["id"];
    a.name = data["name"];
    a.imagePath = data["imagePath"];
    a.description = data["description"];
    a.ingredients = data.ingredientsArr;
    console.log(a);
    props.editRecipe(index, a);
  };

  let recipeDetailComponent = (
    <Switch>
      <Route
        path={`${props.match.path}/:id/edit`}
        render={(props) => (
          <RecipeEdit
            editRecipe={(index, data) => editRecipeHandler(index, data)}
            {...props}
          />
        )}
      />
      <Route
        path={`${props.match.path}/new`}
        render={(props) => (
          <RecipeEdit addRecipe={(data) => addRecipeHandler(data)} {...props} />
        )}
      />
      <Route
        path={`${props.match.path}/:id`}
        render={(props) => (
          <RecipeDetail
            {...props}
            addToShopping={(data) => addToShoppingHandler(data)}
          />
        )}
      />
      <Route path="/recipe" render={() => <h2>Please select a recipe!</h2>} />
    </Switch>
  );

  return (
    <div className="row">
      <div className="col-md-6">
        <RecipeList {...props} />
      </div>
      <div className="col-md-6">{recipeDetailComponent}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToShopping: (data) => dispatch(action.addToShopList(data)),
    addRecipe: (data) => dispatch(action.addRecipe(data)),
    editRecipe: (index, data) => dispatch(action.editRecipe(index, data)),
  };
};

export default connect(null, mapDispatchToProps)(Recipes);
