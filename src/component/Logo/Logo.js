import React from "react";

import recipeLogo from "../../assets/images/recipe.jpg";
import styles from "./Logo.module.css";

const logo = (props) => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={recipeLogo} alt="MyBurger" />
  </div>
);

export default logo;
