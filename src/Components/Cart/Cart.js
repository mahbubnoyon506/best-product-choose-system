import React, { useState } from 'react';

const Cart = ({cart,resetHandler}) => {   
    // const [choosen, setChoosen] = useState([]);

    let image = '';
    let title = '';
   for(const product of cart){
       image = image + product.image
       title = title + product.title;       
   }  

//    const choosetHandler = ()=>{
//     const result = Math.round(Math.random() * cart.length);
//     const cartNumber = cart.length
//    if(result === cartNumber){
//        return title
//    }
//     setChoosen(title)
//     console.log(title)
//    }
    return (
        <div>
            {
                cart.length > 4 ? <p className='text-danger'>You can not select more then four products</p> : <p className='d-block'>{title}</p>  
            }
            <p>Your choosen item: {title} </p>
            <button className='btn btn-primary me-1' >Choose One</button>
            <button className='btn btn-danger' onClick={()=>resetHandler()}>reset</button>
        </div>
    );
};

export default Cart;