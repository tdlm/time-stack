import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import "./style/theme.scss";

import CountdownList from "./components/CountdownList";
import Filter from "./components/Filter";

const store = configureStore({});

store.dispatch({ type: "@timestack/@@INIT" });

const App = () => {
  return (
    <>
      <Filter />
      <CountdownList />
    </>
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
