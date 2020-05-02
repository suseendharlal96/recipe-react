import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Recipes from "./containers/Recipes/Recipes";
import ShoppingList from "./containers/ShoppingList/ShoppingList";
import Layout from "./component/Layout/Layout";
import Home from "./shared/Home";

const App = (props) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const activetheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("color-theme-in-transition");
    setTheme(activetheme);
    document.documentElement.setAttribute("data-theme", activetheme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  };
  return (
    <Fragment>
      <Layout changeTheme={toggleTheme} activetheme={theme}>
        <div className="container" style={{ height: "100vh" }}>
          <div className="row">
            <div className="col-md-12">
              <Route path="/" exact component={Home} />
              <Route path="/recipe" component={Recipes} />
              <Route path="/shopping" component={ShoppingList} />
              {/* <button onClick={toggleTheme}>Theme</button> */}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default App;
