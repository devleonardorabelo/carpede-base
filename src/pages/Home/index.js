import React, { useContext, useState, useEffect } from 'react';
import { Text, SafeAreaView, View, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';
import OrderContext from '../../contexts/order';
import api from '../../services/api';

import styles, { Theme } from '../../global';
import { Header } from '../../components/Header';
import { SlideHorizontal } from '../../components/Lists';
import { SearchInput } from '../../components/Elements';
import { ViewOrder } from '../../components/Footer';

const Home = () => {
  const { navigate } = useNavigation();
  const { customer, signOut } = useContext(AuthContext);
  const { products: orderProducts } = useContext(OrderContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const loadCategories = async () => {
    const { data } = await api.get('/categories');
    if (data) setCategories(data);
  };

  const loadProducts = async () => {
    const { data } = await api.get('/products');
    if (data) setProducts(data);
  };

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

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
            data={products}
            name="Promoções"
            type="product"
            large
          />
          <SlideHorizontal
            data={products}
            name="Mais vendidos"
            type="product"
            large
          />
        </ScrollView>
      </SafeAreaView>
      <ViewOrder items={orderProducts} active={!!orderProducts.length} />
    </>
  );
};

export default Home;
