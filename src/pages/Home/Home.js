import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingProduct from '../../Products/BookingProduct';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import AdverTise from './AdverTise';
import HomeBanner from './HomeBanner';

const Home = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
    // const [pLoading , setpLoading] = useState(false);

    const { data: advertisedProduct = [] } = useQuery({
        queryKey: ['advertisedproduct'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertisedproduct`)
            const data = res.json();
            return data
        }
    })

    return (
        <div>
            <HomeBanner></HomeBanner>
            <div>
                {
                    advertisedProduct.length > 0 && <AdverTise
                        advertisedProduct={advertisedProduct}
                        setCurrentProduct={setCurrentProduct}
                    ></AdverTise>
                }
            </div>

            <CategoryProducts></CategoryProducts>

            <div>
                {
                    currentProduct && <BookingProduct
                        product={currentProduct}
                        setCurrentProduct={setCurrentProduct}
                    // stopLoading = {stopLoading}
                    // setpLoading ={setpLoading}
                    ></BookingProduct>
                }
            </div>
        </div>
    );
};

export default Home;