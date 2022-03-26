import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {image, title, price, rating} = props.product;

    return (
        
        <div className="product-page col-md-6 col-lg-4">         
            <div className='img-wrap'><img className='img-fluid shadow-sm p-3 mb-5 bg-body' src={image} alt="" /></div>
            <div className='content-wrap'>
              <h3>{title}</h3>
              <h4>Price: ${price} </h4>
              <p>Rating: {rating.rate}</p>
            </div>         
            <button className='btn-cart' onClick={() => props.cartHandler(props.product)}>Add to Cart <FontAwesomeIcon> {faShoppingCart}</FontAwesomeIcon></button>
        </div>  
    );
};

export default Product;