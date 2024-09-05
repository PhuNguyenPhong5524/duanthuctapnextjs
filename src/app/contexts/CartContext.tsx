"use client"

import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import CartItem from './../types/interfaceCartItem';
import IProductDetail from './../types/inrterfaceProductDetail';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: IProductDetail) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalPrice: () => number; // Hàm getTotalPrice không nhận tham số
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const addToCart = (item: IProductDetail) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      const updatedCart = existingItemIndex !== -1
        ? prevCart.map((cartItem, index) =>
            index === existingItemIndex
              ? { ...cartItem, quantity: (cartItem.quantity || 0) + (item.quantity || 1) }
              : cartItem
          )
        : [...prevCart, { ...item, quantity: item.quantity || 1 }];

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 } : cartItem
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: (cartItem.quantity || 0) - 1 }
            : cartItem
        )
        .filter((cartItem) => !(cartItem.id === id && cartItem.quantity! <= 1)); 
  
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };
  const oneusd = 24000;
  const totalPrice = () => {
    return cart.reduce((total, item) => total + ((item.gia_km || 0) * (item.quantity || 1)/ oneusd), 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalPrice }}  
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
