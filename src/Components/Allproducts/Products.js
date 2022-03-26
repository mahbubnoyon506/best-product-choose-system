import React, { useEffect, useState } from 'react';
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
        <div className='row'>
           <div className='row col-md-10 g-4'>
               {
                 products.map( product => <Product key={product.id} product={product} cartHandler={cartHandler}></Product>)
                
               }          
           </div>
           <div className='col-md-2'>
               <h4>Selected Clothes</h4>
               <Cart  cart ={cart}  resetHandler={resetHandler} ></Cart>
               {/* <button onClick={()=>selectItem(choose)}>select one</button> */}
               
           </div>
        </div>
    );
};

export default Products;