import * as actionType from "../actions/actionType";
const initState = {
  recipe: [
    {
      id: Math.random(),
      name: " Tasty Schnitzel",
      description: "A super-tasty Schnitzel - just awesome!",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
      ingredients: [
        { name: "meat", quantity: 1, price: 100 },
        { name: "buns", quantity: 1, price: 100 },
      ],
    },
    {
      id: Math.random(),
      name: "Big Fat Burger",
      description: "What else you need to say?",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
      ingredients: [
        { name: "french fries", quantity: 20, price: 100 },
        { name: "bacon", quantity: 20, price: 100 },
      ],
    },
  ],
  selectedRecipe: null,
};

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SELECTED_RECIPE:
      const a = { ...state };
      const selected = a.recipe.find((data) => data.id === action.key);
      return { ...state, selectedRecipe: selected };
    case actionType.ADD_RECIPE:
      console.log(action.recipeData);
      return {
        ...state,
        recipe: state.recipe.concat(action.recipeData),
      };
    case actionType.EDIT_RECIPE:
      console.log(action.index);
      console.log(action.recipeData);
      return {
        ...state,
        recipe: state.recipe.map((recp, index) =>
          index === action.index ? action.recipeData : recp
        ),
      };
    case actionType.DELETE_RECIPE:
      return {
        ...state,
        recipe: state.recipe.filter((data, index) => index !== action.delIndex),
      };
    default:
      return state;
  }
};

export default recipeReducer;
