import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// importing our containers
import TodosContainer from "../todos";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={TodosContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
