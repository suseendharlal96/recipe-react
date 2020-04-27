import React, { useState, createContext } from "react";

export const recipeContext = createContext(null);

const RecipeProvider = (props) => {
  const [ings, selectedIngs] = useState();
  return (
    <recipeContext.Provider value={[ings, selectedIngs]}>
      {props.children}
    </recipeContext.Provider>
  );
};
export default RecipeProvider;
