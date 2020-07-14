import React, { useContext, useState, useEffect, useCallback } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  BackHandler,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';
import OrderContext from '../../contexts/order';
import { api } from '../../services/api';

import styles, { Theme } from '../../global';
import { Header } from '../../components/Header';
import { SlideHorizontal } from '../../components/Lists';
import { SearchInput } from '../../components/Elements';
import { ViewOrder } from '../../components/Footer';

const Home = () => {
  const { navigate } = useNavigation();
  const { customer, signOut } = useContext(AuthContext);
  const { products: orderProducts, calculateTotalValue } = useContext(
    OrderContext
  );
  const [categories, setCategories] = useState([]);
  const [onSale, setOnSale] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  const loadCategories = async () => {
    const { data } = await api.get('/categories');
    if (data) setCategories(data);
  };

  const loadOnSale = async () => {
    const { data } = await api.get('/onsale');
    if (data) setOnSale(data);
  };

  const loadBestSellers = async () => {
    const { data } = await api.get('/bestsellers');
    if (data) setBestSellers(data);
  };

  useEffect(() => {
    loadCategories();
    loadOnSale();
    loadBestSellers();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <>
      <SafeAreaView
        style={[
          styles.container,
          orderProducts.length && { paddingBottom: 60 },
        ]}
      >
        <StatusBar
          backgroundColor={Theme.background1}
          barStyle={Theme.mode === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Header
          iconLeft="logout"
          actionLeft={signOut}
          iconRight="face-profile"
          actionRight={() => navigate('Profile')}
        />
        <ScrollView style={{ paddingTop: 16 }}>
          <View style={styles.column}>
            <Text style={styles.title}>Olá, {customer.name}.</Text>
            <Text style={[styles.subtitle, { marginTop: -4 }]}>
              Tá com fome de quê?
            </Text>
            <SearchInput placeholder="Ex: hamburguer" />
          </View>

          <SlideHorizontal
            data={categories}
            name="Categorias"
            type="category"
          />
          <SlideHorizontal
            data={onSale}
            name="Promoções"
            type="product"
            large
          />
          <SlideHorizontal
            data={bestSellers}
            name="Mais vendidos"
            type="product"
            large
          />
        </ScrollView>
      </SafeAreaView>
      <ViewOrder
        items={orderProducts}
        amount={calculateTotalValue()}
        active={!!orderProducts.length}
        action={() => navigate('Delivery')}
      />
    </>
  );
};

export default Home;
