import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from '../../routes';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';

interface AppProps {
  store: Store;
  storePersistor: Persistor;
}

const App: React.StatelessComponent<AppProps> = ({ store, storePersistor }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={storePersistor}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
