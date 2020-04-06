import { applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewareList = [reduxThunk];

let middleware;

if ("production" !== process.env.NODE_ENV) {
  middlewareList.push(createLogger());
  middleware = compose(composeWithDevTools(applyMiddleware(...middlewareList)));
} else {
  middleware = compose(applyMiddleware(...middlewareList));
}

export default middleware;
