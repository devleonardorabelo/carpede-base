import React, { useContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from '@buttercup/react-formatted-input';
import AuthContext from '../../contexts/auth';
import { api } from '../../services/api';

import { whatsappFormat } from '../../utils/treatStrings';

import styles from '../../global';
import { Input, Button, OutlineButton } from '../../components/Elements';
import { Header } from '../../components/Header';
import { Map } from '../../components/Structures';
import { STORE_ID } from '../../constants/api';
import { ListOrderRectangle } from '../../components/Lists';
import { LoadingListOrderRectangle } from '../../components/Effects';

const Profile = () => {
  const { navigate } = useNavigation();
  const { customer, signUp } = useContext(AuthContext);

  const [name, setName] = useState(customer.name);
  const [whatsapp, setWhatsapp] = useState(customer.whatsapp);
  const [address, setAddress] = useState(customer.address);
  const [complement, setComplement] = useState(customer.complement);
  const [number, setNumber] = useState(customer.number);
  const [latitude, setLatitude] = useState(customer.latitude);
  const [longitude, setLongitude] = useState(customer.longitude);
  const [modalVisible, setModalVisible] = useState(false);
  const [statusButton, setStatusButton] = useState('disabled');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState([]);

  const formatWhatsapp = (newNumber) =>
    setWhatsapp(format(newNumber, whatsappFormat));

  const checkData = () => {
    if (
      name.length > 3 &&
      whatsapp.raw.length === 11 &&
      address.length > 5 &&
      number > 0
    ) {
      setStatusButton(null);
    } else {
      setStatusButton('disabled');
    }
  };

  const handleUpdateCustomer = async () => {
    setStatusButton('loading');
    await signUp({
      name,
      whatsapp,
      address,
      complement,
      number,
      latitude,
      longitude,
    });
    setStatusButton('done');
    setTimeout(() => goBack(), 500);
  };

  const loadOrders = async () => {
    setLoading(true);
    const { data } = await api.get('order', {
      params: {
        store_id: STORE_ID,
        whatsapp: customer.whatsapp.raw,
      },
    });
    setOrders(data);
    if (data) setLoading(false);
  };

  useEffect(() => {
    checkData();
  }, [name, whatsapp, address, number]);

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-left"
          actionLeft={() => navigate('Home')}
          title="PERFIL"
        />

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.navItem, page === 1 && styles.navItemActive]}
            onPress={() => setPage(1)}
          >
            <Text style={styles.bold}>Meus Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navItem, page === 2 && styles.navItemActive]}
            onPress={() => setPage(2)}
          >
            <Text style={styles.bold}>Meus Dados</Text>
          </TouchableOpacity>
        </View>
        {page === 1 && (
          <>
            <View style={styles.column}>
              <Text style={styles.boldSubtitle}>Ultimos Pedidos</Text>
            </View>
            {loading ? (
              <LoadingListOrderRectangle />
            ) : (
              <ListOrderRectangle data={orders} />
            )}
          </>
        )}
        {page === 2 && (
          <ScrollView>
            <View style={styles.column}>
              <Text style={styles.title}>Sobre você</Text>
              <Text style={styles.subtitle}>Suas informações de Entrega</Text>
            </View>
            <View style={styles.column}>
              <Input
                label="Seu nome"
                action={(e) => setName(e)}
                defaultValue={name}
              />
              <Input
                label="Seu Whatsapp"
                action={(e) => formatWhatsapp(e)}
                keyboardType="phone-pad"
                maxLength={16}
                defaultValue={whatsapp.formatted}
              />
              <Input
                label="Endereço"
                action={(e) => setAddress(e)}
                defaultValue={address}
              />
              <View style={{ flexDirection: 'row' }}>
                <Input
                  label="Complemento"
                  style={{ flexGrow: 1, marginRight: 16 }}
                  action={(e) => setComplement(e)}
                  defaultValue={complement}
                />
                <Input
                  label="Numero"
                  action={(e) => setNumber(e)}
                  keyboardType="numeric"
                  defaultValue={number}
                />
              </View>
              <OutlineButton
                icon="map-marker"
                title="Alterar minha localização"
                action={() => setModalVisible(true)}
              />
              <Button
                title="Salvar"
                status={statusButton}
                disabledTitle="Preencha os campos"
                doneTitle="Dados alterados"
                action={handleUpdateCustomer}
              />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.backgroundModal}>
          <View
            style={[
              styles.modal,
              { padding: 0, height: '100%', paddingTop: 24 },
            ]}
          >
            <Map
              style={{ height: 200 }}
              initialRegion={{
                latitude: customer.latitude,
                longitude: customer.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              coordinate={{
                latitude: customer.latitude,
                longitude: customer.longitude,
              }}
              onDragEnd={(e) => {
                setLatitude(e.nativeEvent.coordinate.latitude);
                setLongitude(e.nativeEvent.coordinate.longitude);
              }}
            />
            <View style={{ padding: 16 }}>
              <Button
                title="Confirmar localização"
                action={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Profile;
