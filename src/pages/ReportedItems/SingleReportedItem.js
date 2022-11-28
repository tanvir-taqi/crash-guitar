import React from 'react';

const SingleReportedItem = ({handleDeleteItem,item,i}) => {
    
    const {askingPrice, sellerEmail, sellerName,productId, productName, buyersName, buyersEmail, phone, location, productPhoto, sellerLocation, sellersPhone ,_id} = item

    return (
        <div className='grid grid-cols-1 md:grid-cols-7 gap-6 items-center md:rounded-full w-full md:flex-row bg-cyan-200 my-4 p-3  '>
        <p>{i+1}</p>
        <img src={productPhoto} className='h-20 w-20 border-b-4 border-r-2 border-l-2 border-cyan-700 p-1 rounded-full' alt="" />
        <h1 className='text-center'>{productName}</h1>
        <h1 className='text-center'>{sellerEmail}</h1>
        <h1 className='text-center'>{sellerName}</h1>
        <p className='text-center'>$ {askingPrice}</p>  
        <button onClick={()=>handleDeleteItem(_id)} className='btn btn-xs bg-red-600 '>X</button>
    </div>
    );
};

export default SingleReportedItem;