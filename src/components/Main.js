import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//style
import { Navbar, Nav } from 'react-bootstrap';
//components
import Products from './Products';
import Cart from './Cart';


const Main = () => {
    //prekiu krepselis
    const [item, setItem] = useState([]);

    //prekes pridejimas i krepseli
    const addToCart = (product) =>{
        console.log(product);
        let newCart = [...item];
        let arYra = newCart.find((preke)=> product.name === preke.name);
        if(arYra && arYra.kiekis < product.countInStock){
            arYra.kiekis++;
        } else if (arYra===undefined){
            arYra = {
                ...product,
                kiekis: 1
            }
            newCart.push(arYra);
        } else {
            alert('Prekes sandelyje nera');
        }
    setItem(newCart);
    }
    console.log(item)
    return (
        <Router>
            <Navbar bg="light" variant="light">
                 <Link to="/"><Navbar.Brand>e-Shop</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Products</Link></Nav.Link>
                        <Nav.Link><Link to="/cart">Cart</Link></Nav.Link>                
                    </Nav>               
            </Navbar>
            <Switch>
                <Route path="/cart">
                    <Cart item={item}/>
                </Route>
                <Route path="/">
                    <Products addToCart={addToCart}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Main
