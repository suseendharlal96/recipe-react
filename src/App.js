import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Recipes from "./containers/Recipes/Recipes";
import ShoppingList from "./containers/ShoppingList/ShoppingList";
import Layout from "./component/Layout/Layout";
import Home from "./shared/Home";
import ThemeContext from "./shared/ThemeContext";

const App = () => {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   const activetheme = theme === "light" ? "dark" : "light";
  //   document.documentElement.classList.add("color-theme-in-transition");
  //   setTheme(activetheme);
  //   document.documentElement.setAttribute("data-theme", activetheme);
  //   window.setTimeout(() => {
  //     document.documentElement.classList.remove("color-theme-in-transition");
  //   }, 1000);
  // };
  return (
    <Fragment>
      <ThemeContext>
        <Layout>
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
      </ThemeContext>
    </Fragment>
  );
};

export default App;
