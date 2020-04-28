import * as action from "./actionType";

export const getRecipes = () => {
  return {
    type: action.GET_RECIPES,
  };
};
export const selectedRecipes = (key) => {
  return {
    type: action.SELECTED_RECIPE,
    key: key,
  };
};
