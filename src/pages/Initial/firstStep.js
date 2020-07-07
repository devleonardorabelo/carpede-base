import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  StatusBar,
  View,
  Keyboard,
  PermissionsAndroid,
} from 'react-native';
import NavigationBarColor from 'react-native-navigation-bar-color';
import { format } from '@buttercup/react-formatted-input';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import { whatsappFormat } from '../../utils/treatStrings';
import styles, { Theme } from '../../global';

import { Header } from '../../components/Header';
import { Input, CircularButton } from '../../components/Elements';

const FirstStep = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState({
    raw: '',
    formatted: '',
  });
  const [visibleButton, setVisibleButton] = useState(false);
  const [buttonStatus, setButtonStatus] = useState('disabled');

  const formatWhatsapp = (number) =>
    setWhatsapp(format(number, whatsappFormat));

  const navigateToSecondStep = async () => {
    if (name.length >= 4 && whatsapp.formatted.length === 16) {
      Keyboard.dismiss();
      const getPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (getPermission === 'denied') {
        setVisibleButton(true);
        setButtonStatus(null);
        return;
      }
      navigate('SecondStep', { name, whatsapp });
      setButtonStatus(null);
      setTimeout(() => setVisibleButton(true), 1000);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    NavigationBarColor(Theme.background1, Theme.mode !== 'dark');
  }, []);

  useEffect(() => {
    navigateToSecondStep();
  }, [name, whatsapp]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={Theme.background1}
        barStyle={Theme.mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Header ocult />
      <View style={styles.column}>
        <Text style={styles.title}>Seja bem-vindo(a)</Text>
        <Text style={styles.subtitle}>
          Primeiro precisamos saber mais sobre você!
        </Text>
      </View>
      <View style={styles.column}>
        <Input label="Qual o seu nome?" action={(e) => setName(e)} />
        <Input
          label="Qual o seu Whatsapp?"
          action={(e) => formatWhatsapp(e)}
          keyboardType="phone-pad"
          maxLength={16}
          defaultValue={whatsapp.formatted}
        />
        {visibleButton && (
          <CircularButton
            style={{ alignSelf: 'center' }}
            icon="chevron-right"
            action={navigateToSecondStep}
            status={buttonStatus}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default FirstStep;
