import React, { useContext } from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { ThemeContext } from "../../../shared/ThemeContext";

const NavigationItems = () => {
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
  return (
    <ul className={styles.NavigationItems}>
      {/* <NavigationItem link="/" exact>
      Recipe Book
    </NavigationItem> */}
      <NavigationItem link="/recipe">Recipes</NavigationItem>
      <NavigationItem link="/shopping" exact>
        Shopping List
      </NavigationItem>
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

export default NavigationItems;
