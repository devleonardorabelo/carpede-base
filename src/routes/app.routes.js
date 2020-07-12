import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderProvider } from '../contexts/order';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Products from '../pages/Products';
import Show from '../pages/Show';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <OrderProvider>
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Products" component={Products} />
      <AppStack.Screen name="Show" component={Show} />
    </AppStack.Navigator>
  </OrderProvider>
);

export default AppRoutes;
