import React from "react";
// import { connect } from "react-redux";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
  // let user = null;
  // if (props.email) {
  //   user = <span style={{ color: "yellow" }}>{"Welcome " + props.email}</span>;
  // }
  return (
    <div>
      <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        {/* {user} */}
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     email: state.authReducer.email,
//   };
// };

// export default connect(mapStateToProps)(toolbar);
export default toolbar;
