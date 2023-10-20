import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingProduct from '../../Products/BookingProduct';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import Stats from '../Stats/Stats';
import AdverTise from './AdverTise';
import HomeBanner from './HomeBanner';
import Events from '../Events/Events';
import TrendingTracks from '../TrendingTracks/TrendingTracks';

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
          {advertisedProduct.length > 0 && (
            <AdverTise
              advertisedProduct={advertisedProduct}
              setCurrentProduct={setCurrentProduct}
            ></AdverTise>
          )}
        </div>

        <CategoryProducts></CategoryProducts>

        <div>
          {currentProduct && (
            <BookingProduct
              product={currentProduct}
              setCurrentProduct={setCurrentProduct}
            ></BookingProduct>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2  md:p-6 my-5">
          <h2 className={`text-2xl font-bold text-cyan-900 text-center `}>
            What We Are!!
          </h2>
          <p className="text-justify">
            {" "}
            We are a team of passionate individuals who came together to create
            innovative solutions that transcend conventional boundaries and
            address the most pressing challenges of our time. Our journey began
            with a shared vision - a vision that goes beyond just making a
            profit. It's a vision rooted in our belief that technology, when
            harnessed ethically and creatively, can bring about positive change
            in the world. At our core, we are problem solvers. We thrive on
            tackling complex problems and finding elegant solutions that make a
            difference. Our team brings together a diverse range of skills and
            experiences, spanning engineering, design, data science, and more.
            This diversity is our strength, as it allows us to approach
            challenges from multiple angles and devise holistic solutions. Our
            commitment to innovation is unwavering.
          </p>
        </div>
        <Stats></Stats>
        <Events></Events>
        <TrendingTracks></TrendingTracks>
       
      </div>
    );
};

export default Home;