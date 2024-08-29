// contexts/CartContext.tsx
"use client"

import React, { createContext, useState, ReactNode, useEffect } from 'react';
import CartItem from './../types/interfaceCartItem';
import { useContext } from 'react';
import IProductDetail from './../types/inrterfaceProductDetail';




interface CartContextType {
  cart: CartItem[];
  addToCart: (item: IProductDetail) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
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

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      const updatedCart = existingItemIndex !== -1
        ? prevCart.map((cartItem, index) =>
            index === existingItemIndex
              ? { ...cartItem, quantity: (cartItem.quantity || 0) + (item.quantity || 1) }
              : cartItem
          )
        : [...prevCart, { ...item, quantity: item.quantity || 1 }];

      // Lưu vào localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.id !== id);
      // Cập nhật localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    // Xóa localStorage
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
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