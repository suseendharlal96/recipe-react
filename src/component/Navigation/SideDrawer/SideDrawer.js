import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../Backdrop/Backdrop";
import Logo from "../../Logo/Logo";

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  // let user = null;
  // if (props.email) {
  //   user = <span style={{ color: "brown" }}> {"Welcome " + props.email}</span>;
  // }
  return (
    <div>
      <Backdrop show={props.open} click={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        {/* {user} */}
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     email: state.authReducer.email,
//   };
// };

export default sideDrawer;
