import { Children, createContext, useContext, useState } from "react";

const ShoppingCardContext = createContext({});
import React from "react";
import ShopCart from "../shopCart";

const ShoppingCard = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
const [isOpen ,setIsopen]=useState(false)
  const itemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.Quantiti || 0;
  };

  const increaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        // لو مش موجود ضيفه وخلي الكميه واحد
        return [...currItems, { id, Quantiti: 1 }];
      } 
        return currItems.map((item) => {
           return item.id === id ? {...item, Quantiti: item.Quantiti + 1 } : item;
        });
      }
    );
  };

 const decreaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        // لو مش موجود 
        return currItems.filter((item )=>item.id!==id);
      } else {
        return currItems.map((item) => {
         return  item.id === id ? { ...item, Quantiti: item.Quantiti - 1 } : item;
        });
      }
    });
  };

  const removeItemFromCard=(id)=>{
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  
  const handlClose=()=>{
    setIsopen(false)
  }
const handlOpen=()=>{
    setIsopen(true)
  }
  const cartQuantity=cartItems.reduce((quantity ,item )=>(
  quantity + item.Quantiti
  ),0)
  return (
    <ShoppingCardContext.Provider value={{ cartItems, itemQuantity, increaseQuantity,decreaseQuantity,removeItemFromCard,handlClose,handlOpen,cartQuantity }}>
      {children}
      <ShopCart isOpen={isOpen}/>
    </ShoppingCardContext.Provider>
  );
};

export default ShoppingCard;

export const useShoppingCard = () => {
  return useContext(ShoppingCardContext);
};
