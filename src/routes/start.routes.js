import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FirstStep from '../pages/Initial/firstStep';
import SecondStep from '../pages/Initial/secondStep';

const StartStack = createStackNavigator();

const StartRoutes = () => (
  <StartStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: ({ current, layouts }) => {
        return {
          cardStyle: {
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-layouts.screen.height, 0],
                }),
              },
            ],
          },
        };
      },
    }}
  >
    <StartStack.Screen name="FirstStep" component={FirstStep} />
    <StartStack.Screen name="SecondStep" component={SecondStep} />
  </StartStack.Navigator>
);

export default StartRoutes;
