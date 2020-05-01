import React, { useEffect } from "react";

const RecipeItem = (props) => {
  // const [active, setActive] = useState("list-group-item clearfix");
  const navigate = (id) => {
    console.log(id);
    props.history.push(`/recipe/${props.index}`);
    props.selected(id);
    // if (i === props.index) {
    //   setActive("list-group-item clearfix active");
    // } else {
    //   setActive("list-group-item clearfix");
    // }
  };
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div
      className="row"
      style={{ marginTop: "15px" }}
      onClick={() => navigate(props.id)}
    >
      <div className="col-12">
        <div
          style={{ cursor: "pointer" }}
          className={
            props.isActive
              ? "list-group-item clearfix active"
              : "list-group-item clearfix"
          }
        >
          <div className="float-left">
            <h4 className="list-group-item-heading">{props.name} </h4>
            <p className="list-group-item-text"> {props.description} </p>
          </div>
          <span className="float-right">
            <img
              src={props.image}
              alt={props.name}
              className="img-responsive"
              style={{ maxHeight: "50px" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
