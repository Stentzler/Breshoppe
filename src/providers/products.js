import api from '../services/api';
import {createContext, useState, useEffect} from 'react';

export const ProductsContext = createContext([]);

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [productAdded, setProductAdded] = useState(true);

  useEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data);
    });
  }, [productAdded]);

  // Descomente o console.log para testar o array
  // de produtos que está chegando da API.

  // Se não houver produtos, mande uma mensagem ao Bruno.

  //console.log(products);

  return (
    <ProductsContext.Provider value={{products, productAdded, setProductAdded}}>
      {children}
    </ProductsContext.Provider>
  );
};
