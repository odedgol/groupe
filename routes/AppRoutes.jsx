import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RenderFunc from 'pages/Landing';

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={RenderFunc} />
  </Switch>
);

export default AppRoutes;
