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

export const addRecipe = (data) => {
  return {
    type: action.ADD_RECIPE,
    recipeData: data,
  };
};

export const editRecipe = (index, data) => {
  return {
    type: action.EDIT_RECIPE,
    recipeData: data,
    index: index,
  };
};

export const deleteRecipe = (index) => {
  return {
    type: action.DELETE_RECIPE,
    delIndex: index,
  };
};
