import React, { useState, useContext, useEffect } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OrderContext from '../../contexts/order';

import { treatPrice } from '../../utils/treatStrings';

import styles, { Theme } from '../../global';
import { Header } from '../../components/Header';
import {
  OutlineButton,
  Button,
  Input,
  LinkButton,
} from '../../components/Elements';
import { ModalView } from '../../components/Structures';

const Checkout = () => {
  const { navigate, goBack } = useNavigation();
  const { calculateTotalValue, confirmOrder } = useContext(OrderContext);
  const [value, setValue] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState(0);
  const [change, setChange] = useState(0);
  const [method, setMethod] = useState('');
  const [fees, setFees] = useState(0);
  const [delivery, setDelivery] = useState(3);
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    if (method === 'credit') {
      setFees(3);
    } else {
      setFees(0);
    }
    setValue(calculateTotalValue(fees + delivery));
  }, [fees, delivery, method]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header iconLeft="arrow-left" actionLeft={goBack} />
        <View style={styles.column}>
          <Text style={styles.title}>Pagamento</Text>
          <Text style={[styles.subtitle, { marginTop: -4 }]}>
            Como quer pagar?
          </Text>
        </View>
        <Text
          style={[styles.bold, { paddingHorizontal: 16, paddingBottom: 16 }]}
        >
          Forma de pagamento
        </Text>
        <View style={styles.row}>
          <OutlineButton
            style={{ width: '49%', marginRight: '1%' }}
            icon="cash"
            title="Dinheiro"
            active={paymentMethod === 'cash' && true}
            action={() => {
              setMethod('');
              setAmount(0);
              setChange(0);
              setFees(0);
              setPaymentMethod('cash');
              setModalStatus(true);
            }}
          />
          <OutlineButton
            style={{ width: '49%', marginLeft: '1%' }}
            icon="credit-card"
            title="Cartão"
            active={paymentMethod === 'card' && true}
            action={() => {
              setAmount(0);
              setAmount(0);
              setChange(0);
              setFees(0);
              setPaymentMethod('card');
              setModalStatus(true);
            }}
          />
        </View>
        {paymentMethod === 'cash' && amount > 0 && (
          <>
            <Text
              style={[styles.bold, { paddingHorizontal: 16, paddingBottom: 8 }]}
            >
              Método escolhido
            </Text>
            <View style={styles.column}>
              <View style={styles.spaceBetween}>
                <Text style={styles.medium}>Pagar com: </Text>
                <Text style={styles.light}>{treatPrice(amount)}</Text>
              </View>
              {change > 0 && (
                <View style={styles.spaceBetween}>
                  <Text style={styles.medium}>Troco: </Text>
                  <Text style={styles.light}>
                    {amount >= value && treatPrice(change)}
                  </Text>
                </View>
              )}
            </View>
          </>
        )}
        {paymentMethod === 'card' && method !== '' && (
          <>
            <Text
              style={[styles.bold, { paddingHorizontal: 16, paddingBottom: 8 }]}
            >
              Método escolhido
            </Text>
            <View style={styles.column}>
              <View style={styles.spaceBetween}>
                <Text style={styles.medium}>Pagar com: </Text>
                {method === 'credit' && (
                  <Text style={styles.light}>Cartão de Crédito</Text>
                )}
                {method === 'debit' && (
                  <Text style={styles.light}>Cartão de Dédito</Text>
                )}
              </View>
            </View>
          </>
        )}

        <Text
          style={[styles.bold, { paddingHorizontal: 16, paddingBottom: 8 }]}
        >
          Taxas e acréscimos
        </Text>
        <View style={styles.column}>
          <View style={styles.spaceBetween}>
            <Text style={styles.medium}>Entrega: </Text>
            <Text style={styles.light}>{treatPrice(delivery)}</Text>
          </View>
          {method === 'credit' && (
            <View style={styles.spaceBetween}>
              <Text style={styles.medium}>Cartão de cédito: </Text>

              <Text style={styles.light}>{treatPrice(fees)}</Text>
            </View>
          )}
        </View>
        <View style={styles.column}>
          <View
            style={[
              styles.spaceBetween,
              {
                paddingBottom: 16,
                borderBottomColor: Theme.background2,
                borderBottomWidth: 1,
                marginBottom: 16,
              },
            ]}
          >
            <Text style={styles.bold}>Total a pagar: </Text>
            <Text style={styles.boldSubtitle}>{treatPrice(value)}</Text>
          </View>
          <Button
            title="Confirmar Pagamento"
            status={method !== '' || amount >= value ? null : 'disabled'}
            disabledTitle="Escolha como pagar"
            action={() => {
              confirmOrder(
                fees,
                delivery,
                paymentMethod,
                amount,
                change,
                method
              );
              navigate('Success');
            }}
          />
        </View>
      </SafeAreaView>
      <ModalView show={modalStatus}>
        {paymentMethod === 'cash' ? (
          <View style={{ padding: 16 }}>
            <Text style={styles.boldSubtitle}>Precisa de Troco?</Text>
            <Text style={[styles.medium, { paddingBottom: 16 }]}>
              Total: {treatPrice(value)}
            </Text>
            <Input
              label="Para quanto?"
              keyboardType="numeric"
              placeholder="00,00"
              action={(e) => setAmount(e)}
              focus
              centralized
            />
            <Button
              style={{ marginBottom: 16 }}
              title="Confirmar Pagamento"
              status={amount >= value ? null : 'disabled'}
              disabledTitle="Escolha o troco"
              action={() => {
                setChange(amount - value);
                setModalStatus(false);
              }}
            />
            <LinkButton
              icon="cash"
              title="Já está trocado"
              action={() => {
                setAmount(value);
                setModalStatus(false);
              }}
            />
          </View>
        ) : (
          <View style={{ padding: 16 }}>
            <Text style={[styles.boldSubtitle, { marginBottom: 16 }]}>
              Crédito ou Débito?
            </Text>
            <View style={[styles.row, { paddingHorizontal: 0 }]}>
              <OutlineButton
                style={{ width: '49%', marginRight: '1%' }}
                icon="credit-card-outline"
                title="Crédito"
                action={() => {
                  setModalStatus(false);
                  setPaymentMethod('card');
                  setMethod('credit');
                }}
              />
              <OutlineButton
                style={{ width: '49%', marginLeft: '1%' }}
                icon="credit-card"
                title="Débito"
                action={() => {
                  setModalStatus(false);
                  setPaymentMethod('card');
                  setMethod('debit');
                }}
              />
            </View>
          </View>
        )}
      </ModalView>
    </>
  );
};

export default Checkout;
