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
import { STORE_ID } from '../../constants/api';

import styles, { Theme } from '../../global';
import { Header } from '../../components/Header';
import { SlideHorizontal } from '../../components/Lists';
import { SearchInput } from '../../components/Elements';
import { ViewOrder } from '../../components/Footer';
import { LoadingSlide } from '../../components/Effects';

const Home = () => {
  const { navigate } = useNavigation();
  const { customer, signOut } = useContext(AuthContext);
  const { products: orderProducts, calculateTotalValue } = useContext(
    OrderContext
  );
  const [categories, setCategories] = useState([]);
  const [onSale, setOnSale] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const loadCategories = async () => {
    const { data } = await api.get('categories', {
      params: { store_id: STORE_ID },
    });
    if (data) setCategories(data);
  };

  const loadOnSale = async () => {
    const { data } = await api.get('/onsale', {
      params: { store_id: STORE_ID },
    });
    if (data) setOnSale(data);
  };

  const loadBestSellers = async () => {
    const { data } = await api.get('/bestsellers', {
      params: { store_id: STORE_ID },
    });
    if (data) setBestSellers(data);
  };

  const loadInfos = async () => {
    await loadCategories();
    await loadOnSale();
    await loadBestSellers();
    setLoading(false);
  };

  useEffect(() => {
    loadInfos();
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
            <SearchInput
              onChangeText={(e) => setFilter(e)}
              placeholder="Ex: hamburguer"
              action={() => navigate('Products', { filter })}
            />
          </View>

          {loading ? (
            <>
              <LoadingSlide />
              <LoadingSlide large />
              <LoadingSlide large />
            </>
          ) : (
            <>
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
                style={{ marginBottom: 60 }}
                large
              />
            </>
          )}
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
