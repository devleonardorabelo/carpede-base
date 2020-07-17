import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

import styles, { Theme } from '../../global';
import { Header } from '../../components/Header';
import { Map } from '../../components/Structures';
import { OutlineButton, Button } from '../../components/Elements';

const Delivery = () => {
  const { goBack, navigate } = useNavigation();
  const { customer } = useContext(AuthContext);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    setLatitude(customer.latitude);
    setLongitude(customer.longitude);
  }, [customer]);
  return (
    <SafeAreaView style={styles.container}>
      <Header iconLeft="arrow-left" actionLeft={goBack} title="ENTREGA" />
      <View style={{ height: '35%', marginBottom: 16 }}>
        <Map
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          coordinate={{
            latitude,
            longitude,
          }}
          onDragEnd={(e) => {
            setLatitude(e.nativeEvent.coordinate.latitude);
            setLongitude(e.nativeEvent.coordinate.longitude);
          }}
        />
      </View>
      <Text style={[styles.bold, { paddingHorizontal: 16, paddingBottom: 8 }]}>
        Entregar em:
      </Text>
      <View style={styles.column}>
        <View style={[styles.spaceBetween]}>
          <Text style={styles.medium}>Endereço: </Text>
          <Text style={[styles.light, { flex: 1, paddingLeft: 8 }]}>
            {`${customer.address} ${customer.complement} ${customer.number}`}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 16,
            borderBottomColor: Theme.background2,
            borderBottomWidth: 1,
            marginBottom: 16,
          }}
        >
          <OutlineButton
            style={{ marginTop: 16 }}
            icon="home-map-marker"
            title="Alterar Endereço"
            action={() => navigate('Profile')}
          />
        </View>
        <Button
          title="Confirmar Localização"
          action={() => navigate('Checkout')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Delivery;
