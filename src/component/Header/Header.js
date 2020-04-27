import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const header = () => {
  return (
    <Fragment>
      <div className={styles.Header}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Recipe Book
            </Link>
          </div>

          {/* <div className="collapse navbar-collapse"> */}
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Recipes</Link>
              <Link to="/">Shopping List</Link>
            </li>
            <li>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <Link to="/" className="dropdown-toggle" role="button">
                Manage <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/">Save Data</Link>
                </li>
                <li>
                  <Link to="/">Fetch Data</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default header;
