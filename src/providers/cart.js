import {createContext, useState} from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
  // Se existir o item "@Breshopee:Carrinho" no localStorage,
  // o useState já usará automaticamente aquele item;
  // caso contrário, usará um array vazio.
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('@Breshopee:Carrinho')) || []);

  // Mandar o objeto do produto para adicionar ao carrinho.
  const addToCart = item => {
    const newCartList = [...cart, item];
    localStorage.setItem('@Breshopee:Carrinho', JSON.stringify(newCartList));
    setCart([...cart, item]);
  };

  // Mandar o index do item a ser removido para remover o produto.
  const removeFromCart = id => {
    const newCartList = cart.filter(item => item.id !== id);
    localStorage.setItem('@Breshopee:Carrinho', JSON.stringify(newCartList));
    setCart(newCartList);
  };

  // Serve apenas para limpar o localStorage.
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('@Breshopee:Carrinho');
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
