import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderProvider } from '../contexts/order';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Order from '../pages/Profile/order';
import Products from '../pages/Products';
import Show from '../pages/Show';
import Delivery from '../pages/Delivery';
import Checkout from '../pages/Checkout';
import Success from '../pages/Checkout/success';

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
      <AppStack.Screen name="Order" component={Order} />
      <AppStack.Screen name="Products" component={Products} />
      <AppStack.Screen name="Show" component={Show} />
      <AppStack.Screen name="Delivery" component={Delivery} />
      <AppStack.Screen name="Checkout" component={Checkout} />
      <AppStack.Screen name="Success" component={Success} />
    </AppStack.Navigator>
  </OrderProvider>
);

export default AppRoutes;
