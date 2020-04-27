import React, { useState } from "react";

const ShoppingEdit = (props) => {
  // const [name, setName] = useState();
  const [ings, setIngs] = useState({ name: "", amount: "" });
  const setIngredients = (event) => {
    event.persist();
    setIngs((ings) => ({ ...ings, [event.target.name]: event.target.value }));
  };

  const addIngredients = (event) => {
    event.preventDefault();
    props.addIngredients(ings);
  };
  return (
    <div className="row">
      <div className="col-12">
        <form>
          <div className="row">
            <div className="col-sm-5 form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={ings.name}
                className="form-control"
                onChange={setIngredients}
              />
            </div>
            <div className="col-sm-2 form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                value={ings.amount}
                name="amount"
                className="form-control"
                onChange={setIngredients}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-success" onClick={addIngredients}>
                Add
              </button>
              <button className="btn btn-danger" type="button">
                Delete
              </button>
              <button className="btn btn-primary" type="button">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShoppingEdit;
