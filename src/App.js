import React, { Fragment, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Layout from "./component/Layout/Layout";
import Home from "./shared/Home";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/logout/logout";
import ThemeContext from "./shared/ThemeContext";

const LazyRecipe = React.lazy(() => {
  return import("./containers/Recipes/Recipes");
});

const LazyShop = React.lazy(() => {
  return import("./containers/ShoppingList/ShoppingList");
});

const App = (props) => {
  let authData = null;
  if (props.auth !== null) {
    authData = <React.Fragment></React.Fragment>;
  }
  return (
    <Fragment>
      <ThemeContext>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>
            <div className="container" style={{ height: "100vh" }}>
              <div className="row">
                <div className="col-md-12">
                  <Route path="/" exact component={Home} />
                  <Route path="/auth" component={Auth} />
                  <Route path="/logout" component={Logout} />
                  <Route
                    path="/recipe"
                    render={(props) => <LazyRecipe {...props} />}
                  />
                  <Route
                    path="/shopping"
                    render={(props) => <LazyShop {...props} />}
                  />
                </div>
              </div>
            </div>
          </Suspense>
        </Layout>
      </ThemeContext>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.idToken,
  };
};

export default connect(mapStateToProps)(App);
