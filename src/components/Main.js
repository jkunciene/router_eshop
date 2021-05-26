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
        } else if (arYra===undefined && product.countInStock>0){
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

    //metodas krepselio isvalymui
    const clearCart = ()=>{
        setItem([]);
    }
    //konkrecios prekes trynimo  metodas
    const deleteProduct = (product) => {
        console.log(product);
        setItem(item.filter((p) => p !== product));
    }
    //konkrecios prekes kiekio mazinimas
    const decreaseQuantity = (product) => {
        console.log("kiekio mazinimas "+product)
        let newCart = [...item];
        let arYra = newCart.find((preke)=> product.name === preke.name);
        if(arYra.kiekis > 1){
            arYra.kiekis--;
            setItem(newCart.splice(arYra));
        } else {
            setItem(item.filter((p) => p !== arYra))
        }
    }

    //konkrecios prekes kiekio didinimas
    const increaseQuantity = (product)=>{
         
        let newCart = [...item];
        let arYra = newCart.find((preke)=> product.name === preke.name);
        if(arYra && arYra.kiekis < product.countInStock){
            arYra.kiekis++;
        } else {
            alert("Deja prekes sandelyje jau nebera")
        }
        setItem(newCart)
    }

    return (
        <Router>
            <Navbar bg="light" variant="light" className="sticky-top">
                 <Link to="/"><Navbar.Brand>e-Shop</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Products</Link></Nav.Link>
                        <Nav.Link><Link to="/cart">Cart</Link></Nav.Link>                
                    </Nav>               
            </Navbar>
            <Switch>
                <Route path="/cart">
                    <Cart item={item} clearCart={clearCart} deleteProduct={deleteProduct} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity}/>
                </Route>
                <Route path="/">
                    <Products addToCart={addToCart}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Main
