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
      return {
        ...state,
        ingredients: state.ingredients.concat(a),
      };
    case actionType.EDIT_INGREDIENT:
      const editData = action.ingredient;
      console.log(action.index);
      const copy = { ...state };
      copy.ingredients[action.index] = editData;
      console.log(copy);
      return {
        ...state,
        ingredients: state.ingredients.map((data, i) =>
          i === action.index ? action.ingredient : data
        ),
      };
    case actionType.ADD_TO_SHOPLIST:
      let arr = [];
      action.list.forEach((data) => {
        arr.push({
          name: data["name"],
          amount: data["quantity"],
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
