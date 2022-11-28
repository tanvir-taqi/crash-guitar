
import React, { useState } from 'react';

import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../componenets/LoadingSpinner';
import CategoryProducts from '../pages/CategoryProducts/CategoryProducts';
import BookingProduct from './BookingProduct';
import SingleProduct from './SingleProduct';

const Products = () => {

    const products = useLoaderData()
    const navigation = useNavigation();
    const [currentProduct, setCurrentProduct] = useState(null);
    const [pLoading, setpLoading] = useState(false);

    const stopLoading = () => {
        setpLoading(false)
    }


    if (navigation.state === "loading" || pLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className=''>

            <div>
                <CategoryProducts></CategoryProducts>
            </div>

            <div className='md:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-2'>
                {
                    products.map((product) => {
                        return (
                            <>
                               { product.status !== "Paid" && <SingleProduct
                                    key={product._id}
                                    product={product}
                                    setProduct={setCurrentProduct}
                                ></SingleProduct>}
                            </>
                        )
                    }
                    )
                }
            </div>
            <div>

                {
                    currentProduct && <BookingProduct
                        product={currentProduct}
                        setCurrentProduct={setCurrentProduct}
                        stopLoading={stopLoading}
                        setpLoading={setpLoading}
                    ></BookingProduct>
                }

            </div>
        </div>
    );
};

export default Products;