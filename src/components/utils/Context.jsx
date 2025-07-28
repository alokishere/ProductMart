import React, { createContext, useState, useEffect } from 'react';
import axios from './axios';
import { set } from 'react-hook-form';


export const ProductsContext = createContext();

const Context = ({ children }) => {
    const [products, setProducts] = useState(null);

    const getProducts = async () => {
        try {
            const {data} = await axios('/products');
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            
        }
    }
useEffect(() => {
getProducts();
}, [])

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  );
};

export default Context;
