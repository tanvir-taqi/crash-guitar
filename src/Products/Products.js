
import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../componenets/LoadingSpinner';
import CategoryProducts from '../pages/CategoryProducts/CategoryProducts';
import BookingProduct from './BookingProduct';
import SingleProduct from './SingleProduct';

const Products = () => {

    const products = useLoaderData()
    const navigation = useNavigation();
    const [currentProduct,setCurrentProduct] = useState(null);
    



    if(navigation.state === "loading"){
        return <LoadingSpinner></LoadingSpinner>
    }


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
                    setProduct ={setCurrentProduct}
                    ></SingleProduct>)
                }
            </div>
            <div>

            {
                currentProduct && <BookingProduct
                product = {currentProduct}
                setCurrentProduct={setCurrentProduct}
                ></BookingProduct>
            }
            </div>
        </div>
    );
};

export default Products;