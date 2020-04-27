import React from "react";

const ShoppingEdit = () => {
  return (
    <div className="row">
      <div className="col-12">
        <form>
          <div className="row">
            <div className="col-sm-5 form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="col-sm-2 form-group">
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-success" type="submit">
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
