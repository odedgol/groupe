import React from 'react';
import { HashRouter } from 'react-router-dom';

import 'theme';

import AppRoutes from 'routes/AppRoutes';

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <AppRoutes />
  </HashRouter>
);

export default App;
