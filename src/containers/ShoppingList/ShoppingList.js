import React, { useState } from "react";
import { Link } from "react-router-dom";

import ShoppingEdit from "./ShoppingEdit/ShoppingEdit";

const ShoppingList = () => {
  const [ings, setIngs] = useState([
    { name: "meat", amount: 21 },
    { name: "egg", amount: 21 },
    { name: "chicken", amount: 21 },
  ]);
  let ingredients = (
    <React.Fragment>
      {ings.map((data, index) => {
        return (
          <Link
            to="/"
            key={index}
            className="list-group-item"
            style={{ cursor: "pointer" }}
          >
            {data.name} ({data.amount})
          </Link>
        );
      })}
    </React.Fragment>
  );
  return (
    <div className="row">
      <div className="col-10">
        <ShoppingEdit />
        <hr />
        <ul className="list-group">{ingredients}</ul>
      </div>
    </div>
  );
};

export default ShoppingList;
