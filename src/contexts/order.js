import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => setProducts([...products, product]);

  const editProduct = (product) => {
    const index = products.findIndex(
      (obj) => obj.product.idSelect === product.product.idSelect
    );
    products[index].quantity = product.quantity;
    products[index].notice = product.notice;
    setProducts([...products]);
  };

  const removeProduct = (product) => {
    const index = products.findIndex(
      (obj) => obj.product.idSelect === product.product.idSelect
    );
    products.splice(index, 1);
    setProducts([...products]);
  };

  return (
    <OrderContext.Provider
      value={{ products, addProduct, editProduct, removeProduct }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
