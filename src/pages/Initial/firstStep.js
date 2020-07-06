import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  StatusBar,
  View,
  Animated,
  Keyboard,
  PermissionsAndroid,
} from 'react-native';
import NavigationBarColor from 'react-native-navigation-bar-color';
import { format } from '@buttercup/react-formatted-input';
import { useNavigation, useRoute } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import { whatsappFormat } from '../../utils/treatStrings';
import styles, { Theme } from '../../global';

import { Header } from '../../components/Header';
import { Input, CircularButton } from '../../components/Elements';

const FirstStep = () => {
  const { navigate } = useNavigation();
  const { params = {} } = useRoute();

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState({
    raw: '',
    formatted: '',
  });
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [buttonStatus, setButtonStatus] = useState('disabled');

  const opacityContainer = new Animated.Value(1);

  const formatWhatsapp = (number) =>
    setWhatsapp(format(number, whatsappFormat));

  const navigateToSecondStep = async () => {
    if (name.length >= 4 && whatsapp.formatted.length === 16) {
      Keyboard.dismiss();
      const getPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (getPermission === 'denied') {
        setButtonVisibility(true);
        setButtonStatus(null);
        return;
      }
      Animated.timing(opacityContainer, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        navigate('SecondStep', { name, whatsapp });
        setButtonStatus(null);
      });
    }
  };
  const showFirstStep = async () => {
    Animated.timing(opacityContainer, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => SplashScreen.hide(), []);

  useEffect(() => {
    navigateToSecondStep();
  }, [name, whatsapp]);

  useEffect(() => {
    showFirstStep();
    if (params.back) {
      opacityContainer.setValue(0);
      showFirstStep();
      setButtonVisibility(true);
    }
    params.back = false;
  }, [params.back]);

  useEffect(() => {
    NavigationBarColor(Theme.background1, Theme.mode !== 'dark');
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={Theme.background1}
        barStyle={Theme.mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Animated.View style={{ opacity: opacityContainer }}>
        <Header ocult />
        <View style={styles.column}>
          <Text style={styles.title}>Seja bem-vindo(a)</Text>
          <Text style={styles.subtitle}>
            Primeiro precisamos saber mais sobre você!
          </Text>
        </View>
        <Input label="Qual o seu nome?" action={(e) => setName(e)} />
        <Input
          label="Qual o seu Whatsapp?"
          action={(e) => formatWhatsapp(e)}
          keyboardType="phone-pad"
          maxLength={16}
          defaultValue={whatsapp.formatted}
        />
        {buttonVisibility && (
          <CircularButton
            style={{ alignSelf: 'center' }}
            icon="chevron-right"
            action={navigateToSecondStep}
            status={buttonStatus}
          />
        )}
      </Animated.View>
    </ScrollView>
  );
};

export default FirstStep;
