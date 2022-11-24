
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProducts from '../pages/CategoryProducts/CategoryProducts';
import SingleProduct from './SingleProduct';

const Products = () => {

    const products = useLoaderData()

    return (
        <div className=''>
            <div>
                <CategoryProducts></CategoryProducts>
            </div>

            <div className='md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                    products.map((product) => <SingleProduct
                    key={product._id}
                    product={product}
                    ></SingleProduct>)
                }
            </div>
            
        </div>
    );
};

export default Products;