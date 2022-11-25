import React from 'react';

const MySingleProduct = ({product,i}) => {
    const {productPhoto , productName , askingPrice, } = product;
    return (
        <div>
            <p>{i+1}</p>
            <img src={productPhoto} className='h-10 w-10 rounded-full' alt="" />
            <h1>{productName}</h1>
            <p>$ {askingPrice}</p>
            <p></p>
            <button></button>
        </div>
    );
};

export default MySingleProduct;