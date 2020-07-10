import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from '../../global';
import { ListItems } from '../../components/Lists';
import { Header } from '../../components/Header';

const Products = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    if (loading) return;

    setLoading(true);

    const { data } = await api.get('/products', {
      params: { category: params.id, page },
    });

    setProducts([...products, ...data]);

    setPage(page + 1);

    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header iconLeft="arrow-left" actionLeft={goBack} title={params.name} />
      <ListItems data={products} onEndReached={loadProducts} />
    </SafeAreaView>
  );
};

export default Products;
