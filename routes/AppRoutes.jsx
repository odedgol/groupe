import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from 'pages/Landing';

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={Landing} />
  </Switch>
);

export default AppRoutes;
