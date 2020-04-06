import { combineReducers } from "redux";
import app from "./app/reducer";

// Combine all the reducers here!
const rootReducer = combineReducers({
  app,
});

export default rootReducer;
