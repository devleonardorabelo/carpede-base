import React, { createContext, useState, useContext } from 'react';
import AuthContext from './auth';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const { customer } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState({});
  const [fees, setFees] = useState({});

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <OrderContext.Provider value={{ products, addProduct }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
