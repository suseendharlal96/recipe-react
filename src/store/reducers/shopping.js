import * as actionType from "../actions/actionType";
const initState = {
  ingredients: [
    { name: "meat", amount: 21, price: 100 },
    { name: "egg", amount: 21, price: 100 },
    { name: "chicken", amount: 21, price: 100 },
  ],
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      const a = action.ingredient;
      console.log(a);
      return {
        ...state,
        ingredients: state.ingredients.concat(a),
      };
    case actionType.EDIT_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((data, i) =>
          i === action.index ? action.ingredient : data
        ),
      };
    case actionType.DELETE_INGREDIENT:
      const updated = state.ingredients.filter((data, i) => i !== action.index);
      return {
        ...state,
        ingredients: updated,
      };
    case actionType.ADD_TO_SHOPLIST:
      console.log(action.list);
      let arr = [];
      action.list.forEach((data) => {
        arr.push({
          name: data["name"],
          amount: data["amount"],
          price: data["price"],
        });
      });
      console.log(arr);
      return {
        ...state,
        ingredients: state.ingredients.concat(arr),
      };
    default:
      return state;
  }
};
export default shopReducer;
