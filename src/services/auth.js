import AsyncStorage from '@react-native-community/async-storage';

async function loadCustomer() {
  const customer = await AsyncStorage.getItem('@Carpede:customer');
  return JSON.parse(customer);
}

export default loadCustomer;
