import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Recipes from "./containers/Recipes/Recipes";
import ShoppingList from "./containers/ShoppingList/ShoppingList";
import Layout from "./component/Layout/Layout";
import Home from "./shared/Home";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Route path="/" exact component={Home} />
              <Route path="/recipe" component={Recipes} />
              <Route path="/shopping" component={ShoppingList} />
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default App;
