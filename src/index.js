import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import App from "./containers/app";

import { store } from "./helpers";

// importing global Application styles
import "./global.scss";

// root node to render our application
const target = document.getElementById("root");

render(<App store={store} />, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
