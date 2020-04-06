import { createStore } from "redux";
import reducer from "./reducer";
import middleware from "./middleware";

/**
 * Configure the store.
 * @param {Object} initialState Initial state object (typically empty: {}).
 */
const configureStore = (initialState) => {
  return createStore(reducer, initialState, middleware);
};

export default configureStore;
