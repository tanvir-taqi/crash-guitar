import { useQuery } from '@tanstack/react-query';

import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import { AuthContext } from '../../userContext/UserContext';
import MySingleProduct from './MySingleProduct';

const MyProducts = () => {

    const { user, loading } = useContext(AuthContext)
    const sellerEmail = user?.email
 


    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myproducts', sellerEmail],
        queryFn: async () => {
            
            const res = await fetch(`https://crash-guitar-server.vercel.app/myproducts/?email=${sellerEmail}`)
            const data = await res.json()
            
            return data
        }
    })

    const handleMyProductDelete = (id) => {
        const agree = window.confirm('Are you sure you want to delete this product?')

        if (!agree) {
            return
        }
        else {
            fetch(`https://crash-guitar-server.vercel.app/myproducts/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.error("Successfully Deleted")
                        refetch()
                    }
                })
        }
    }


    const handleAddToAd = (id) => {

        fetch(`https://crash-guitar-server.vercel.app/myproducts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Successfully Added to Advertisement")
                    refetch()
                }
            })
    }

    if (isLoading || loading ) {
        refetch()
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='md:m-10'>
            <Toaster></Toaster>

            <h1 className='text-center text-3xl font-extrabold text-slate-800'>My Products</h1>
            <div className='flex justify-center items-center flex-col'>
                {
                    myProducts.map((product, i) => <MySingleProduct
                        key={product._id}
                        i={i}
                        product={product}
                        handleMyProductDelete={handleMyProductDelete}
                        handleAddToAd={handleAddToAd}
                    ></MySingleProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;