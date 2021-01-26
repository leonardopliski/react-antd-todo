import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TodosContainer } from 'containers/todos';

interface IRoutesProps {}

export const Routes: React.FC<IRoutesProps> = () => (
  <Switch>
    <Route path="/" exact={true} component={TodosContainer} />
  </Switch>
);
