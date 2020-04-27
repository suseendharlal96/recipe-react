import React, { useState } from "react";

import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setshowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setshowSideDrawer(false);
  };

  const sidebarToggleHandler = () => {
    setshowSideDrawer(!showSideDrawer);
  };
  return (
    <React.Fragment>
      <Toolbar
        drawerToggleClicked={sidebarToggleHandler}
      />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
