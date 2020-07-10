import React, { useState, useContext, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { OrderContext } from '../../contexts/order';

import { treatPrice } from '../../utils/treatStrings';
import styles from '../../global';
import { Header } from '../../components/Header';
import { QuantityButton, Button, TextArea } from '../../components/Elements';

const Show = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { products, addProduct } = useContext(OrderContext);
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState('');

  console.log(params);

  const addNewProduct = () => {
    addProduct({ product: params, quantity, notice });
    goBack();
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header iconLeft="arrow-left" actionLeft={goBack} title="Detalhes" />
      <ScrollView>
        <Image style={styles.image} source={{ uri: params.image }} />

        <View style={styles.column}>
          <Text style={[styles.boldSubtitle, { marginBottom: 8 }]}>
            {params.name}
          </Text>
          <Text style={[styles.light, { marginBottom: 8 }]}>
            {params.description}
          </Text>
          <Text style={styles.boldSubtitle}>{treatPrice(params.price)}</Text>
        </View>

        <View style={styles.column}>
          <TextArea
            label="Observações"
            placeholder="Você quer deixar uma observação ? Escreve aqui!"
            action={(e) => setNotice(e)}
          />
          <QuantityButton
            quantity={String(quantity)}
            actionLeft={() => {
              if (quantity > 0) setQuantity(quantity - 1);
            }}
            actionRight={() => setQuantity(quantity + 1)}
          />
          <Button
            title={
              quantity > 0 &&
              `Adicionar ${quantity} por ${treatPrice(quantity * params.price)}`
            }
            status={quantity === 0 ? 'disabled' : ''}
            disabledTitle="Selecione uma quantidade"
            action={addNewProduct}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Show;
