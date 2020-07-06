import React, { useContext } from 'react';
import { Text, SafeAreaView } from 'react-native';
import AuthContext from '../../contexts/auth';

import styles from '../../global';
import { Header } from '../../components/Header';

const Home = () => {
  const { customer, signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Header iconLeft="logout" actionLeft={signOut} />
      <Text style={styles.title}>Olá, {customer.name}.</Text>
    </SafeAreaView>
  );
};

export default Home;
