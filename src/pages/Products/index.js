import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from '../../global';
import { ListItems } from '../../components/Structures';
import { Header } from '../../components/Header';

const Products = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const { data } = await api.get('/products', {
      params: { category: params.id },
    });
    if (data) setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header iconLeft="arrow-left" actionLeft={goBack} title={params.name} />
      <ListItems data={products} />
    </SafeAreaView>
  );
};

export default Products;
