import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import "./style/theme.scss";

import countdowns from "./utilities/countdowns.json";
import CountdownList from "./components/CountdownList";

const store = configureStore({});

store.dispatch({ type: "@timestack/@@INIT" });

const App = () => {
  return (
    <div>
      <CountdownList list={countdowns} />
    </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
