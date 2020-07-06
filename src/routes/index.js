import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import StartRoutes from './start.routes';

const Routes = () => {
  const { signed } = useContext(AuthContext);
  return signed ? <AppRoutes /> : <StartRoutes />;
};

export default Routes;
