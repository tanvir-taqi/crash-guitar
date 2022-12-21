import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingProduct from '../../Products/BookingProduct';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import Stats from '../Stats/Stats';
import AdverTise from './AdverTise';
import HomeBanner from './HomeBanner';

const Home = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
  

    const { data: advertisedProduct = [] } = useQuery({
        queryKey: ['advertisedproduct'],
        queryFn: async () => {
            const res = await fetch(`https://crash-guitar-server.vercel.app/advertisedproduct`,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('crashGuitarToken')}`
                }
            })
            const  data= res.json();
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
                   
                    ></BookingProduct>
                }
            </div>
            <Stats></Stats>
        </div>
    );
};

export default Home;