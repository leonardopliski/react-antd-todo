import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// importing our containers
import TodosContainer from "../todos";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={TodosContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
