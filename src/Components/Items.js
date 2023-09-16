import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Contextconsumer } from '../Context/ShopingCartContext'
import Format from "./Currancy"
function Items({ id, price, name, imgUrl }) {
    const { GetItemsQuantity, AddItems, decreaseItems, RemoveItem } = Contextconsumer();
    const quantity = GetItemsQuantity(id);
    return (

        <div >
            <Card className=" h-100">
                <Card.Img src={imgUrl} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body >
                    <Card.Title className="d-flex justify-content-between aling-items-baseline">
                        <span>{name}</span>
                        <span className="text-muted"> {Format(price)}</span>
                    </Card.Title>
                    {quantity ? <Fragment>
                        <div className="d-flex justify-content-center aling-items-center mt-4 gap-2">
                            <Button onClick={()=>decreaseItems(id)} >-</Button>
                            <span className="fs-4"> {quantity} in cart</span>
                            <Button onClick={() => AddItems(id)}>+</Button>
                        </div>
                        <Button style={{ width: "fit-content", margin: 'auto', display: "block" }} className='mt-2' onClick={() => RemoveItem(id)} variant="danger">Remove</Button>
                    </Fragment> :


                        <div className="mt-4">

                            <Button className="w-100" onClick={() => AddItems(id)}> Add To Card</Button>


                        </div>
                    }



                </Card.Body>

            </Card>

        </div>
    );
}

export default Items;
