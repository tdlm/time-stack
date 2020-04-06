import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import "./style/theme.scss";

import CountdownList from "./components/CountdownList";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

const store = configureStore({});

store.dispatch({ type: "@timestack/@@INIT" });

const App = () => {
  return (
    <>
      <Filter />
      <CountdownList />
      <Footer />
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
