import React from "react";
import { Button, Stack } from "react-bootstrap";
import { Contextconsumer } from '../Context/ShopingCartContext';
import Format from './Currancy';
import storeItems from "../data/items.json";

const CartItem = ({ id, quantity }) => {
  const { RemoveItem } = Contextconsumer()
  const item = storeItems.find(i => i.id === id);
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.imgUrl} style={{ width: "115px", height: "80px", objectFit: 'cover' }} alt="cart_item" />
      <div className="me-auto">
        <span style={{ fontWeight:'bold' }}>{item.name}</span>{" "}
        {quantity > 1 && <span className="text-muted" >x{quantity}</span>}
        <div className="text-muted ">{Format(item.price)}</div>
      </div>
      <div>{Format(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={()=>RemoveItem(id)}>&times;</Button>
     
    </Stack>
    
      

  )
}

export default CartItem