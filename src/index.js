import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import config from "./aws-exports.js";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Diable Serviceworkers
// serviceWorker.unregister();
