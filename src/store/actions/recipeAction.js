import axios from "axios";

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

const addRecipeToLocal = (data) => {
  return {
    type: action.ADD_RECIPE,
    recipeData: data,
  };
};

export const addRecipe = (data) => {
  return (dispatch) => {
    axios
      .post("https://recipe-react-69b9a.firebaseio.com/recipe.json", data)
      .then((response) => {
        console.log(response);
        dispatch(addRecipeToLocal(data));
      })
      .catch((err) => console.log(err));
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
