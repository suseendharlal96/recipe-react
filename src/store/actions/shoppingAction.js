import * as actions from "./actionType";

export const getIngredients = () => {
  return {
    type: actions.GET_INGREDIENTS,
  };
};

export const addIngredient = (ing) => {
  return {
    type: actions.ADD_INGREDIENT,
    ingredient: ing,
  };
};

export const editIngredient = (ing, index) => {
  return {
    type: actions.EDIT_INGREDIENT,
    ingredient: ing,
    index: index,
  };
};

export const addToShopList = (data) => {
  console.log("data", data);
  return {
    type: actions.ADD_TO_SHOPLIST,
    list: data,
  };
};
