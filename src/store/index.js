import { createStore } from "redux";
import reducer from "./reducer";
import middleware from "./middleware";

const configureStore = (initialState) => {
  return createStore(reducer, initialState, middleware);
};

export default configureStore;
