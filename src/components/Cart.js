import React from 'react';

import { Table } from 'react-bootstrap';

const Cart = ({item}) => {
    return (
        <div>
            <h2>Jusu krepselis</h2>
            <Table striped bordered hover>
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
                <tbody>
                   {
                        item && item.map((preke, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><img src={preke.imageUrl}/></td>
                                <td>{preke.name}</td>
                                <td><button>-</button>{preke.kiekis}<button>+</button></td>
                                <td>{preke.price}</td>
                                <td><button>Trinti</button></td>
                            </tr>
                        ))
                   }
                   <tr>
                       <td colSpan="4">Bendra krepselio suma: </td>
                       <td><button>Pirkti</button></td>
                       <td><button>Salinti</button></td>
                   </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default Cart
