import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MaineBay from 'pages/Landing';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={MaineBay} />
  </Switch>
);

export default AppRoutes;
