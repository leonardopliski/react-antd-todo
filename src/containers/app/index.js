import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "../../routes";

import RootContainer from "../root";

const App = ({ store, storePersistor }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={storePersistor}>
        <RootContainer>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </RootContainer>
      </PersistGate>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  storePersistor: PropTypes.object.isRequired
};

export default App;
