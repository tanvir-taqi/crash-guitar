import React from 'react';

const MySingleProduct = ({product,i,handleMyProductDelete ,handleAddToAd}) => {
    const {productPhoto , productName , askingPrice , _id,status ,advertise} = product;
    return (
        <div className='grid grid-cols-1 md:grid-cols-7 gap-6 items-center md:rounded-full w-full md:flex-row bg-cyan-200 my-4 p-3  '>
            <p className='font-extrabold'>{i+1}</p>
            <img src={productPhoto} className='h-20 w-20 border-b-4 border-r-2 border-l-2 border-cyan-700 p-1 rounded-full' alt="" />
            <h1 className='text-center'>{productName}</h1>
            <p className='text-center'>$ {askingPrice}</p>
            <p className='text-center'>{status}</p>
           { !advertise &&  <button onClick={()=>handleAddToAd(_id)} className='btn btn-xs text-end'>Add To Advertisement</button> }
           { advertise && <p className='text-center'>On the advertisement</p> }
            <button onClick={()=>handleMyProductDelete(_id)} className='btn btn-xs bg-red-600 '>X</button>
        </div>
    );
};

export default MySingleProduct;