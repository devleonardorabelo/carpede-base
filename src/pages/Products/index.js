import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import OrderContext from '../../contexts/order';
import { api } from '../../services/api';
import { STORE_ID } from '../../constants/api';

import styles from '../../global';
import { ListItems } from '../../components/Lists';
import { Header } from '../../components/Header';
import { ViewOrder } from '../../components/Footer';

const Products = () => {
  const { goBack, navigate } = useNavigation();
  const { products: orderProducts, calculateTotalValue } = useContext(
    OrderContext
  );

  const { params } = useRoute();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadProducts = async (filter) => {
    if (loading) return;

    setLoading(true);

    const { data } = await api.get('/products', {
      params: { category: params.id, page, filter, store_id: STORE_ID },
    });

    setProducts([...products, ...data]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    if (params && params.filter) {
      loadProducts(params.filter);
    } else {
      loadProducts();
    }
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, orderProducts.length && { paddingBottom: 60 }]}
    >
      <Header
        iconLeft="arrow-left"
        actionLeft={goBack}
        title={params.name || 'RESULTADOS'}
      />
      <ListItems data={products} onEndReached={loadProducts} />
      <ViewOrder
        items={orderProducts}
        amount={calculateTotalValue()}
        active={!!orderProducts.length}
        action={() => navigate('Delivery')}
      />
    </SafeAreaView>
  );
};

export default Products;
