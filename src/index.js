import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { store, persistor } from "./helpers";

import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "./global.scss";

import App from "./containers/app";

const target = document.getElementById("root");

render(<App store={store} storePersistor={persistor} />, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
