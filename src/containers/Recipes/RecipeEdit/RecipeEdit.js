import React, { useEffect, useState } from "react";

const RecipeEdit = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState();
  useEffect(() => {
    console.log(props);
    if (props.location.pathname !== "/recipe/new") {
      setEditMode(true);
      setEditId(+props.match.params.id);
    }
  }, []);

  let editComponent = <p>NEW mode</p>;
  if (editMode) {
    editComponent = <p>Edit Mode</p>;
  }
  return <div>{editComponent}</div>;
};

export default RecipeEdit;
