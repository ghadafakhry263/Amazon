import React from 'react';
import items from "../data/item.json"
import { useShoppingCard } from './Context/ShoppingCard';
const Cartitem = ({id ,Quantiti}) => {
const item = items.find((item) => item.id === id);
const {removeItemFromCard}=useShoppingCard()
    return (
        <div className="container mt-4">
          {item ? (
            <div className=" d-flex  mb-3">
              <div className=" d-flex align-items-center">
                <img src={item.image} alt={item.name} style={{ width: '150px', height: '150px', marginRight: '10px' }} />
    
              </div>
               
              <div className="align-items-center">
                 <p>{item.name}</p>
                <div className="me-2">Quantity: {Quantiti}</div>
                <div> price :${item.price.toFixed(2)}</div>
                  <div> total :${item.price*Quantiti}</div>
              </div>
            </div>
        
          ) : (
            <p>Item not found</p>
          )}
         <button onClick={()=>removeItemFromCard(id)} className="btn btn-danger w-10">x</button>

        </div>
    );
};

export default Cartitem;