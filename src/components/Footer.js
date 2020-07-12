import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import FE from 'react-native-vector-icons/Feather';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Gesture from 'react-native-swipe-gestures';

import { treatPrice } from '../utils/treatStrings';

import styles, { Theme } from '../global';
import { ListOrderItems } from './Lists';
import { Button } from './Elements';

export const ViewOrder = ({ active, items, action }) => {
  const [amount, setAmount] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const refHeight = useRef(new Animated.Value(60)).current;
  const refOpacityHeader = useRef(new Animated.Value(1)).current;
  const refOpacityBody = useRef(new Animated.Value(0)).current;

  const calculateTotalValue = () => {
    const calculate = items.reduce(
      (total, each) => total + each.product.price * each.quantity,
      0
    );
    setAmount(calculate);
  };

  const showOrder = () => {
    Animated.timing(refOpacityHeader, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(refHeight, {
      toValue: Dimensions.get('window').height,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(refOpacityBody, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setIsAnimated(true);
  };
  const fadeOrder = () => {
    setIsAnimated(false);
    Animated.timing(refOpacityHeader, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(refHeight, {
      toValue: 60,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(refOpacityBody, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    console.log(calculateTotalValue());
  }, [items]);
  return active ? (
    <Animated.View style={[styles.viewOrder, { height: refHeight }]}>
      <Gesture
        style={{ flex: 1 }}
        onSwipeDown={fadeOrder}
        onSwipeUp={showOrder}
      >
        {!isAnimated ? (
          <Animated.View style={{ opacity: refOpacityHeader }}>
            <TouchableWithoutFeedback
              style={styles.headerOrder}
              onPress={showOrder}
            >
              <View style={{ width: 80 }}>
                <FE name="shopping-bag" color="#FFFFFF" size={28} />
                <Text style={styles.badge}>{items.length}</Text>
              </View>
              <Text style={[styles.medium, { color: '#FFFFFF' }]}>
                Ver pedido
              </Text>
              <Text
                style={[
                  styles.bold,
                  { width: 80, textAlign: 'right', color: '#FFFFFF' },
                ]}
              >
                {treatPrice(amount)}
              </Text>
            </TouchableWithoutFeedback>
          </Animated.View>
        ) : (
          <Animated.View
            style={[styles.headerBodyOrder, { opacity: refOpacityBody }]}
          >
            <TouchableOpacity
              onPress={fadeOrder}
              style={{ width: 28, alignSelf: 'flex-end' }}
            >
              <MI name="close" color={Theme.color1} size={28} />
            </TouchableOpacity>
          </Animated.View>
        )}
        <Animated.View
          style={[styles.bodyOrder, { opacity: refOpacityBody, flexShrink: 1 }]}
        >
          <View style={styles.column}>
            <Text style={styles.title}>Meu Pedido</Text>
            <Text style={[styles.subtitle, { marginTop: -4 }]}>Detalhes</Text>
          </View>

          <ListOrderItems data={items} />
          <View style={styles.footerOrder}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.medium}>Taxa de Entrega: </Text>
              <Text style={styles.light}>{treatPrice(2)}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 16,
                borderBottomColor: Theme.background2,
                borderBottomWidth: 1,
                marginBottom: 16,
              }}
            >
              <Text style={styles.medium}>Total do pedido: </Text>
              <Text style={styles.boldSubtitle}>{treatPrice(amount)}</Text>
            </View>
            <Button title="Confirmar Pedido" action={action} />
          </View>
        </Animated.View>
      </Gesture>
    </Animated.View>
  ) : null;
};
