import React from "react";
import ReactDOM from "react-dom";
import "./style/theme.scss";

import countdowns from "./utilities/countdowns.json";
import CountdownList from "./components/CountdownList";

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

ReactDOM.render(<App />, document.getElementById("app"));
