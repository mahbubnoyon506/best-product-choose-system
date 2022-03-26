import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {image, title, price, rating} = props.product;

    return (
        
        <div className="product-page col-md-6 col-lg-4">
          <div>
            <img className='img-fluid shadow-sm p-3 mb-5 bg-body rounded' src={image} alt="" />
            <h3>{title}</h3>
            <h4>Price: ${price} </h4>
            <p>Rating: {rating.rate}</p>
          </div>
            <button onClick={() => props.cartHandler(props.product)}  className='w-100'>Add to Cart </button>
        </div>  
    );
};

export default Product;