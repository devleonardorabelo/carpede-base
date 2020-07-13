import React, { useCallback } from 'react';
import { View, SafeAreaView, Text, Image, BackHandler } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import imgMap from '../../assets/illustrations/map.png';
import styles from '../../global';
import { Button } from '../../components/Elements';

const Success = ({ navigation }) => {
  const { navigate } = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Home');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: 60 }]}>
      <View style={styles.column}>
        <Text style={styles.title}>Obrigado!</Text>
        <Text style={[styles.subtitle, { marginTop: -4 }]}>
          Seu pedido foi efetuado.
        </Text>
      </View>
      <View style={styles.column}>
        <Image
          source={imgMap}
          style={{
            height: '60%',
            width: '60%',
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
        <Text style={[styles.medium, { paddingTop: 16 }]}>
          Seu pedido está sendo preparado em em breve entregaremos para você.
        </Text>
        <Text style={[styles.bold, { paddingTop: 8, paddingBottom: 16 }]}>
          Tempo estimado: 40 ~ 50 minutos
        </Text>
        <Button title="Voltar para o início" action={() => navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

export default Success;
