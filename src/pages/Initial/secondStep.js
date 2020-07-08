import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, Animated, Text, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import AuthContext from '../../contexts/auth';

import imgSmile from '../../assets/illustrations/smile.png';
import styles, { Theme } from '../../global';
import { Header } from '../../components/Header';
import { Input, CircularButton, Button } from '../../components/Elements';
import { Map, ModalView } from '../../components/Structures';

const SecondStep = () => {
  const { navigate } = useNavigation();
  const { signUp } = useContext(AuthContext);
  const { params } = useRoute();

  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [number, setNumber] = useState();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  const [statusButton, setStatusButton] = useState('disabled');

  const refForm = new Animated.Value(0);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (location) => {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setCurrentPosition({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => console.log(error),
      { timeout: 20000 }
    );
  };

  const showForm = (value) => {
    Animated.timing(refForm, {
      toValue: value,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const checkData = () => {
    if (address.length > 5 && number > 0) {
      Keyboard.dismiss();
      setStatusButton(null);
    } else {
      setStatusButton('disabled');
    }
  };

  const confirmData = () => {
    setShowModal(true);
  };

  const handleSignUp = async () => {
    await signUp({
      name: params.name,
      whatsapp: params.whatsapp,
      address,
      complement,
      number,
      latitude,
      longitude,
    });
  };

  useEffect(() => checkData(), [address, number]);

  useEffect(() => {
    showForm(formHeight);
  }, [formHeight]);

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: Theme.background1 }}>
        <Header
          iconLeft="arrow-left"
          actionLeft={() => navigate('FirstStep', { back: true })}
          float
        />
        <Map
          initialRegion={currentPosition}
          coordinate={{ latitude, longitude }}
          onDragEnd={(e) => {
            setLatitude(e.nativeEvent.coordinate.latitude);
            setLongitude(e.nativeEvent.coordinate.longitude);
          }}
        />
        <Animated.View style={{ bottom: refForm }}>
          <View
            style={styles.scrollVertical}
            onLayout={(e) => setFormHeight(e.nativeEvent.layout.height)}
          >
            <Input label="Endereço" action={(e) => setAddress(e)} />
            <View style={{ flexDirection: 'row' }}>
              <Input
                label="Complemento"
                style={{ flexGrow: 1, marginRight: 16 }}
                action={(e) => setComplement(e)}
              />
              <Input
                label="Numero"
                action={(e) => setNumber(e)}
                keyboardType="numeric"
              />
            </View>
            <Button
              title="Confirmar dados"
              status={statusButton}
              disabledTitle="Preencha o Endereço"
              action={confirmData}
            />
          </View>
        </Animated.View>
      </SafeAreaView>
      <ModalView image={imgSmile} show={showModal} center>
        <Text style={[styles.subtitle, styles.alignCenter]}>
          Olá, {params.name}.
        </Text>
        <Text style={[styles.bold, styles.alignCenter, { marginBottom: 16 }]}>
          Estamos ansiosos para atendê-lo(a)!
        </Text>
        <Text style={[styles.medium, styles.alignCenter]}>
          Fique a vontade para fazer seu pedido e qualquer dúvida é só nos
          chamar!
        </Text>
        <CircularButton icon="chevron-right" center action={handleSignUp} />
      </ModalView>
    </>
  );
};

export default SecondStep;
