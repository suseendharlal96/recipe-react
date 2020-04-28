import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import shopReducer from "./store/reducers/shopping";
import recipeReducer from "./store/reducers/recipe";

const rootReducer = combineReducers({
  recipeReducer: recipeReducer,
  shopReducer: shopReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
