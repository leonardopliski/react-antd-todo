import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TodosContainer } from 'containers/todos';

interface RoutesProps {}

export const Routes: React.StatelessComponent<RoutesProps> = () => (
  <Switch>
    <Route path="/" exact={true} component={TodosContainer} />
  </Switch>
);
