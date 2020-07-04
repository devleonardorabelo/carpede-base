import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FirstStep from '../pages/Initial/firstStep';
import SecondStep from '../pages/Initial/secondStep';

const StartStack = createStackNavigator();

const StartRoutes = () => (
  <StartStack.Navigator screenOptions={{ headerShown: false }}>
    <StartStack.Screen name="FirstStep" component={FirstStep} />
    <StartStack.Screen name="SecondStep" component={SecondStep} />
  </StartStack.Navigator>
);

export default StartRoutes;
