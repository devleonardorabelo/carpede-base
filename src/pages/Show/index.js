import React, { useState, useContext, useEffect } from 'react';
import { View, Image, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { OrderContext } from '../../contexts/order';

import { treatPrice } from '../../utils/treatStrings';
import styles from '../../global';
import { Header } from '../../components/Header';
import {
  QuantityButton,
  Button,
  TextArea,
  LinkButton,
} from '../../components/Elements';

const Show = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { addProduct, editProduct, removeProduct } = useContext(OrderContext);
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState('');

  const {
    id,
    idSelect,
    image,
    name,
    description,
    price,
    notice: currentNotice,
    quantity: currentQuantity,
  } = params;

  const modelProduct = {
    product: {
      id,
      idSelect: idSelect || Math.random().toString(36).substr(2, 10),
      image,
      name,
      description,
      price,
    },
    quantity,
    notice,
  };

  const addNewProduct = () => {
    addProduct(modelProduct);
    goBack();
  };
  const editCurrentProduct = () => {
    editProduct(modelProduct);
    goBack();
  };
  const removeCurrentProduct = () => {
    removeProduct(modelProduct);
    goBack();
  };

  useEffect(() => {
    if (currentQuantity) {
      setQuantity(currentQuantity);
      setNotice(currentNotice);
    }
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header iconLeft="arrow-left" actionLeft={goBack} title="Detalhes" />
      <ScrollView>
        <Image style={styles.image} source={{ uri: image }} />

        <View style={styles.column}>
          <Text style={[styles.boldSubtitle, { marginBottom: 8 }]}>{name}</Text>
          <Text style={[styles.light, { marginBottom: 8 }]}>{description}</Text>
          <Text style={styles.boldSubtitle}>{treatPrice(price)}</Text>
        </View>

        <View style={styles.column}>
          <TextArea
            defaultValue={notice}
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
              `Adicionar ${quantity} por ${treatPrice(quantity * price)}`
            }
            status={quantity === 0 ? 'disabled' : ''}
            disabledTitle="Selecione uma quantidade"
            action={idSelect ? editCurrentProduct : addNewProduct}
          />
        </View>
        {idSelect && (
          <LinkButton
            icon="trash-can-outline"
            title="Remover Item"
            action={removeCurrentProduct}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Show;
