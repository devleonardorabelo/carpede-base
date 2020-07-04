import React from 'react';

import AppRoutes from './app.routes';
import StartRoutes from './start.routes';

const logged = false;

const Routes = () => (logged ? <AppRoutes /> : <StartRoutes />);

export default Routes;
