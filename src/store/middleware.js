import { applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

/**
 * Configure our middleware here, if any.
 *
 * NOTE: We use Redux Thunk for async action support.
 */
const middlewareList = [reduxThunk];

let middleware;

if ("production" !== process.env.NODE_ENV) {
  // If we're in dev, enable the logger and dev tools!
  middlewareList.push(createLogger());
  middleware = compose(composeWithDevTools(applyMiddleware(...middlewareList)));
} else {
  // Otherwise, use the standard middleware list.
  middleware = compose(applyMiddleware(...middlewareList));
}

export default middleware;
