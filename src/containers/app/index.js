import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../../routes";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
