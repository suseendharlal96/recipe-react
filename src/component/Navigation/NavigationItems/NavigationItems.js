import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { ThemeContext } from "../../../shared/ThemeContext";

const NavigationItems = (props) => {
  const { theme } = useContext(ThemeContext);
  const { setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    const activetheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("color-theme-in-transition");
    setTheme(activetheme);
    document.documentElement.setAttribute("data-theme", activetheme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  };

  let authData = null;
  if (props.auth) {
    authData = (
      <React.Fragment>
        <NavigationItem link="/recipe">Recipes</NavigationItem>
        <NavigationItem link="/shopping" exact>
          Shopping List
        </NavigationItem>
      </React.Fragment>
    );
  }
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      {authData}
      {!props.auth ? (
        <NavigationItem link="/auth">Signup/SignIn</NavigationItem>
      ) : (
        <NavigationItem link="/logout">Logout</NavigationItem>
      )}
      <button
        style={{
          outline: "none",
          borderRadius: "15px",
          float: "right",
          color: " var(--primaryText)",
          backgroundColor: "var(--primaryBg)",
        }}
        onClick={changeTheme}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.idToken !== null,
  };
};

export default connect(mapStateToProps)(NavigationItems);
