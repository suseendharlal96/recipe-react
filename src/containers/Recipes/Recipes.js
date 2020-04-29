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
    props.addToShopping(data);
  };

  let recipeDetailComponent = (
    <Switch>
      <Route
        path={`${props.match.path}/:id/edit`}
        render={(props) => <RecipeEdit {...props} />}
      />
      <Route
        path={`${props.match.path}/new`}
        render={(props) => <RecipeEdit {...props} />}
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
  };
};

export default connect(null, mapDispatchToProps)(Recipes);
