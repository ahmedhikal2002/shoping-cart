import { createContext, useContext, useState } from "react";
import React from 'react';
import ShopingCart from "../Components/ShopingCart";
import { useEffect } from "react";
const ShopingCartContext = createContext({});
const ContextProvider = ({ children }) => {
    const storedata = localStorage.getItem('shopingCart')? JSON.parse( localStorage.getItem('shopingCart')) :[] ;
    const [CartItems, setItems] = useState(storedata);
    const [IsOpen, setIsOpen] = useState(false);
    const open = () => {
        setIsOpen(true)
    }
    const close = () => {
        setIsOpen(false);
    }
    
    useEffect(()=>{
        localStorage.setItem('shopingCart',JSON.stringify(CartItems));

    },[CartItems])

    const cartquantity = CartItems.reduce((quantity, items) => (
        quantity + items.quantity
    ), 0)

    const GetItemsQuantity = (id) => {
        const item = CartItems.find((item) => {
            return item.id === id;
        });
        return item ? item.quantity : 0;
    };

    const AddItems = (id) => {
        setItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {

                return [...currItems, { id, quantity: 1 }]

            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        console.log(item.quantity)
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }

        })


    }
    const decreaseItems = (id) => {
        setItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {

                return currItems.filter((item) => item.id !== id);

            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        console.log(item.quantity)
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }

        })

    }

    const RemoveItem = (id) => {
        setItems((currItems) => currItems.filter((item) => item.id !== id));
    }




    return (
        <ShopingCartContext.Provider value={{
            CartItems,
            GetItemsQuantity,
            AddItems,
            decreaseItems,
            RemoveItem, IsOpen, open, close, cartquantity

        }}>
            {children}
            <ShopingCart />
        </ShopingCartContext.Provider>);


};
export default ContextProvider;
export const Contextconsumer = () => {

    return useContext(ShopingCartContext);


};