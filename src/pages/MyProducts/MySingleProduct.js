import React from 'react';

const MySingleProduct = ({product,i,handleMyProductDelete}) => {
    const {productPhoto , productName , askingPrice , _id } = product;
    return (
        <div className='grid grid-cols-1 md:grid-cols-7 gap-6 items-center md:rounded-full w-full md:flex-row bg-cyan-200 my-4 p-3  '>
            <p>{i+1}</p>
            <img src={productPhoto} className='h-20 w-20 rounded-full' alt="" />
            <h1 className='text-center'>{productName}</h1>
            <p className='text-center'>$ {askingPrice}</p>
            <p className='text-center'>Available</p>
            <button className='btn btn-xs text-end'>Add To Advertisement</button>
            <button onClick={()=>handleMyProductDelete(_id)} className='btn btn-xs bg-red-600 '>X</button>
        </div>
    );
};

export default MySingleProduct;