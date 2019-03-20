import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

// importing root application container
import App from "./containers/app";

// importing application global store
import { store } from "./helpers";

// importing defalt ant design styles
import "antd/dist/antd.css";

// importing global Application styles
import "./global.scss";

// root node to render our application
const target = document.getElementById("root");

render(<App store={store} />, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
