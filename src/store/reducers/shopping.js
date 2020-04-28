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
    case actionType.ADD_TO_SHOPLIST:
      let arr = [];
      action.list.map((data) => {
        for (let i = 0; i < 1; i++) {
          arr.push({
            name: data["name"],
            amount: data["quantity"],
            price: data["price"],
          });
        }
      });
      return {
        ...state,
        ingredients: state.ingredients.concat(arr),
      };
    default:
      return state;
  }
};
export default shopReducer;
