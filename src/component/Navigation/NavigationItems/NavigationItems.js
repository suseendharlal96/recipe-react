import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    {/* <NavigationItem link="/" exact>
      Recipe Book
    </NavigationItem> */}
    <NavigationItem link="/recipe">
      Recipes
    </NavigationItem>
    <NavigationItem link="/shopping" exact>
      Shopping List
    </NavigationItem>
    <NavigationItem link="/save" exact>
      Save
    </NavigationItem>
    <NavigationItem link="/fetch" exact>
      Fetch
    </NavigationItem>
  </ul>
);

export default navigationItems;
