import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => navigate('FirstStep'), 2000);
  }, []);
  return <View />;
};

export default Splash;
