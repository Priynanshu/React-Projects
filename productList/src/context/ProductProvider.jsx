import React, { createContext, useEffect, useState } from 'react'
import { fetchURL } from '../api/ProductAPI'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchURL();
      setProductData(data);
    };
    loadProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ productData }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider