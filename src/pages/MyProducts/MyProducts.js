import { useQuery } from '@tanstack/react-query';

import React, { useContext } from 'react';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import { AuthContext } from '../../userContext/UserContext';
import MySingleProduct from './MySingleProduct';

const MyProducts = () => {

    const {user} = useContext(AuthContext)
    const sellerEmail = user?.email

    const {data:myProducts=[], refetch, isLoading} = useQuery({
        queryKey: ['myproducts',sellerEmail],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/myproducts/?email=${sellerEmail}`)
            const data = await res.json()
            console.log(data);
            return data
        }
    })

    const handleMyProductDelete = (id)=>{
            const agree = window.confirm('Are you sure you want to delete this product?')
            
            if(!agree){
                return
            }
            else{
                fetch(`http://localhost:5000/myproducts/${id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        refetch()
                    }
                })
            }
    }

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='md:m-10'>

            <h1 className='text-center text-3xl font-extrabold text-slate-800'>My Products</h1>
           <div className='flex justify-center items-center flex-col'>
           {
             myProducts.map((product,i) => <MySingleProduct
             key={product._id}
             i={i}
             product = {product}
             handleMyProductDelete = {handleMyProductDelete}
             ></MySingleProduct>)
            }
           </div>
        </div>
    );
};

export default MyProducts;