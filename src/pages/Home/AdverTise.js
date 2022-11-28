import React from 'react';
import SingleAdverTise from './SingleAdverTise';

const AdverTise = ({advertisedProduct,setCurrentProduct}) => {
    console.log(advertisedProduct);
    return (
        <div>
            <h1 className='text-center text-3xl font-extrabold text-slate-800 my-6'>Featured Products</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center md:mx-20'>
          {
                advertisedProduct.map(product => <SingleAdverTise
                key={product._id}
                product = {product}
                setCurrentProduct={setCurrentProduct}
                ></SingleAdverTise>)
            }
          </div>
        </div>
    );
};

export default AdverTise;