import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCard } from "./Context/ShoppingCard";

const Itemstor = ({ id,name, price, image }) => {
   const {itemQuantity,increaseQuantity,decreaseQuantity,removeItemFromCard}=useShoppingCard()
  const Quantiti = itemQuantity(id);
  return (
    <>
      <Card className="border p-3 rounded mb-4 mt-2" style={{ width: "18rem" }}>
        <img src={image} alt={name} className="w-100" />
        <h5 className="mt-2">{name}</h5>
        <p className="text-muted"> price: ${price}</p>
        {Quantiti == 0 ? (
          <button onClick={()=>increaseQuantity(id)}  className="btn btn-success">Add to Cart</button>
        ) : (
          <div>
            <div className="mb-2 justify-content-center d-flex align-items-center">
              <Button onClick={()=>decreaseQuantity(id)}>-</Button>
              <span> {Quantiti} in cart </span>
              <Button onClick={()=>increaseQuantity(id)}>+</Button>
            </div>
            <button  onClick={()=>removeItemFromCard(id)} className="btn btn-danger w-100">Remove</button>
          </div>
        )}
      </Card>
    </>
  );
};

export default Itemstor;
