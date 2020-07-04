import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, View } from 'react-native';
import NavigationBarColor from 'react-native-navigation-bar-color';
import { format } from '@buttercup/react-formatted-input';
import { useNavigation } from '@react-navigation/native';

import { whatsappFormat } from '../../utils/treatStrings';
import styles, { Theme } from '../../global';

import { Header } from '../../components/Header';
import { Input, Button } from '../../components/Elements';

const FirstStep = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState({});
  const [statusButton, setStatusButton] = useState('disabled');

  const formatWhatsapp = (number) =>
    setWhatsapp(format(number, whatsappFormat));

  const navigateToSecondStep = () =>
    navigation.navigate('SecondStep', { name, whatsapp });

  useEffect(() => {
    console.log(whatsapp);
    if (name.length >= 4 && whatsapp.formatted.length === 16) {
      setStatusButton('');
    } else {
      setStatusButton('disabled');
    }
  }, [name, whatsapp]);

  return (
    <SafeAreaView
      style={styles.container}
      onLayout={() =>
        NavigationBarColor(Theme.background1, Theme.mode !== 'dark')
      }
    >
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
      <Input label="Qual o seu nome?" action={(e) => setName(e)} />
      <Input
        label="Qual o seu Whatsapp?"
        action={(e) => formatWhatsapp(e)}
        keyboardType="phone-pad"
        maxLength={16}
        defaultValue={whatsapp.formatted}
      />
      <Button
        title="Próximo"
        status={statusButton}
        disabledTitle="Preencha seus dados"
        action={navigateToSecondStep}
      />
    </SafeAreaView>
  );
};

export default FirstStep;
