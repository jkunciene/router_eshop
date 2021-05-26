import React from 'react';

import { Table } from 'react-bootstrap';

const Cart = ({item, clearCart, deleteProduct, decreaseQuantity, increaseQuantity}) => {

    const totalSum = () => {
        return item.reduce((sum,{price, kiekis})=> sum + price*kiekis,0).toFixed(2);
    }
    return (
        <div>
            <h2>Jusu krepselis</h2>
            <Table striped bordered hover>
                {item.length > 0 &&
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nuotrauka</th>
                    <th>Pavadinimas</th>
                    <th>Kiekis</th>
                    <th>Kaina</th>
                    <th>Trinti</th>
                    </tr>
                </thead>
                }
                <tbody>
                   {                    
                        item && item.map((preke, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><img className="img-thumbnail" style={{width: '90px'}} src={preke.imageUrl}/></td>
                                <td>{preke.name}</td>
                                <td className="d-flex"><button className="btn btn-secondary mr-2" onClick={()=>decreaseQuantity(preke)}>-</button>{preke.kiekis}<button className="btn btn-secondary ml-2" onClick={()=>increaseQuantity(preke)}>+</button></td>
                                <td>{preke.price}</td>
                                <td><button className="btn btn-danger" onClick={()=>deleteProduct(preke)}>Trinti</button></td>
                            </tr>
                        ))   
                        }  
                {item.length > 0 &&          
                   <tr>
                       <td colSpan="4">Bendra krepselio suma: {totalSum()} $</td>
                       <td ><button className="btn btn-success" onClick={clearCart}>Pirkti</button></td>
                       <td ><button className="btn btn-danger" onClick={clearCart}>Salinti</button></td>
                   </tr>
                   }
                </tbody>
                    
               
                </Table>
        </div>
    )
}

export default Cart
