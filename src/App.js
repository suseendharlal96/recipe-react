import React, { Fragment } from "react";

import "./App.css";
// import Header from "./component/Header/Header";
import Recipes from "./containers/Recipes/Recipes";
import ShoppingList from "./containers/ShoppingList/ShoppingList";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <Fragment>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Recipes />
              <ShoppingList />
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default App;
