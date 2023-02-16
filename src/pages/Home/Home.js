import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingProduct from '../../Products/BookingProduct';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import Stats from '../Stats/Stats';
import AdverTise from './AdverTise';
import HomeBanner from './HomeBanner';

const Home = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const [advertisedProduct, setadvertisedProduct] = useState([]);
  

    // const { data: advertisedProduct = [] } = useQuery({
    //     queryKey: ['advertisedproduct'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://crash-guitar-server.vercel.app/advertisedproduct`,{
    //             headers:{
    //                 authorization: `Bearer ${localStorage.getItem('crashGuitarToken')}`
    //             }
    //         })
    //         const  data= res.json();
    //         console.log(data);
    //         return data
    //     }
    // })

    useEffect(()=>{
        fetch(`https://crash-guitar-server.vercel.app/advertisedproduct`,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('crashGuitarToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                const availableProd = data.filter(prod=> prod.status === "Available");
                setadvertisedProduct(availableProd)

            })
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