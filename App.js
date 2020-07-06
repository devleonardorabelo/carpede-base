import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
