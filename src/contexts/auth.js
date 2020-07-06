import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import loadCostumer from '../services/auth';

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);

  const saveCustomer = (current) => {
    const {
      name,
      whatsapp,
      address,
      complement,
      number,
      latitude,
      longitude,
    } = current;

    return setCustomer({
      name,
      whatsapp,
      address,
      complement,
      number,
      latitude,
      longitude,
    });
  };

  const signIn = async () => {
    const user = await loadCostumer();
    if (user) saveCustomer(user);
  };
  const signUp = async (newCustomer) => {
    saveCustomer(newCustomer);
    try {
      await AsyncStorage.setItem(
        '@Carpede:customer',
        JSON.stringify(newCustomer)
      );
    } catch (err) {
      console.log(err);
    }
  };
  const signOut = async () => {
    setCustomer(null);
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    signIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: !!customer, customer, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
