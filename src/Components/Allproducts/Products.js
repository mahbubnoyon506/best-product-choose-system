import React, { useEffect, useState } from 'react';
import './Products.css'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])

    const cartHandler = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart);
      
    } 
    const resetHandler = () => {     
        setCart([]);
    }

    return (
        <div className='products-wrap row g-4'>
           <div className='product row col-md-9 g-4'>
               {
                 products.map( product => <Product key={product.id} product={product} cartHandler={cartHandler}></Product>)                
               }          
           </div>
           <div className='aside col-md-3 pt-4'>
               <h4>Selected Clothes</h4>
               <Cart  cart ={cart}  resetHandler={resetHandler} ></Cart>              
           </div>
        </div>
    );
};

export default Products;