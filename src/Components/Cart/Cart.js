import React from 'react';

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
//     const newArray = [result]
//     const result = indexof(cart)
//     const choosenItem = [...choosen]    
    
//     setChoosen(result)
//    }

    return (
        <div>
            {
                cart.length > 4 ? <p className='text-danger'>You can not select more then four products</p> : <div className=' d-flex align-items-center justify-content-between'>
                <div className='w-25'><img className='img-fluid' src= {image} alt="" /></div>
                <p> {title} </p>
               </div>
            }
            <div className='row gx-4'>
                <div className=' col-md-4 '><img className='img-fluid' src= {image} alt="" /></div>
                <div><p className='col-md-8'> {title} </p></div>
            </div>
            <ul className=''>
                <li></li>
            </ul>
            <button className='btn btn-primary me-1'>Choose One</button>
            <button className='btn btn-danger' onClick={()=>resetHandler()}>reset</button>
        </div>
    );
};

export default Cart;