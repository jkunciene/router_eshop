import React from 'react';

//information-data
import data from '../data/Data';

//style
import { Card, Button } from 'react-bootstrap';

const Products = ({addToCart}) => {
    return (
        <div className="d-flex flex-wrap">
            {data.map((preke, index) => (
                <Card className="col-4" key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={preke.imageUrl} />
                    <Card.Body>
                        <Card.Title>{preke.name}</Card.Title>
                        <Card.Text>
                        {preke.description}
                        </Card.Text>
                        <Card.Text>
                        {preke.price}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>addToCart(preke)}>Buy</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Products
