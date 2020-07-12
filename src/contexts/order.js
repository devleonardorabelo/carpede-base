import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (item) => setProducts([...products, item]);

  const editProduct = (item) => {
    const index = products.findIndex(
      (obj) => obj.product.idSelect === item.product.idSelect
    );
    products[index].quantity = item.quantity;
    products[index].notice = item.notice;
    setProducts([...products]);
  };

  const removeProduct = (item) => {
    const index = products.findIndex(
      (obj) => obj.product.idSelect === item.product.idSelect
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
