import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Contextconsumer } from '../Context/ShopingCartContext';
import CartItem from './CartItem';
import storeItems from '../data/items.json';
import Format from '../Components/Currancy';

const ShopingCart = () => {
  const { CartItems, IsOpen, close } = Contextconsumer();



  return (
    <Offcanvas show={IsOpen} onHide={close} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {CartItems.map((item) => (
          <div className='mt-3' key={item.id}>
            <CartItem {...item} />
          </div>
        ))}
        <div className='d-flex justify-content-center mt-3 fs-5 fw-bold'>
          Total{' '}
          

          {Format(CartItems.reduce((total,items)=>{
            const item=storeItems.find((i)=>(i.id===items.id))
            return total+ item.price * items.quantity
            
            },0))}





        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShopingCart;
