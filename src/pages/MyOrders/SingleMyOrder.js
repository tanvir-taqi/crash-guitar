import React from 'react';
import { Link } from 'react-router-dom';

const SingleMyOrder = ({myOrder,i,handleDeleteOrder}) => {
    const {price, sellerEmail, sellerName,productId, productName, buyersName, buyersEmail, phone, location, productPhoto, sellerLocation, sellersPhone ,_id} = myOrder

    return (
        <div className='grid grid-cols-1 md:grid-cols-6 gap-6 items-center md:rounded-full w-full md:flex-row bg-cyan-200 my-4 p-3  '>
        <p>{i+1}</p>
        <img src={productPhoto} className='h-20 w-20 border-b-4 border-r-2 border-l-2 border-cyan-700 p-1 rounded-full' alt="" />
        <h1 className='text-center'>{productName}</h1>
        <p className='text-center'>$ {price}</p>  
        <Link to={`/dashboard/payment/${_id}`}  className='btn btn-xs text-end bg-cyan-700 text-white border-none'>Pay Now</Link> 
        <button onClick={()=>handleDeleteOrder(_id,productId)} className='btn btn-xs bg-red-600 '>X</button>
    </div>
    );
};

export default SingleMyOrder;