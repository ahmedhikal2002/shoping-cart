
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItems from "../data/items.json";
import Items from './Items';

function Store() {
    return (
        < >
            <h1>Store</h1>

            <Row md={2} xs={1} lg={3}>
                {StoreItems.map((item) => {
                    return( <Col key={item.id} className="g-4"> <Items {...item}/> </Col>)
                })}



            </Row>
                
           
        </>
    );
}

export default Store;
