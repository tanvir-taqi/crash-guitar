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

    const newAdvertisedProduct = advertisedProduct.filter(dt=> dt.status === "Available")
    console.log(newAdvertisedProduct);

    return (
        <div>
            <HomeBanner></HomeBanner>
            <div>
                {
                    newAdvertisedProduct.length > 0 && <AdverTise
                        advertisedProduct={newAdvertisedProduct}
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