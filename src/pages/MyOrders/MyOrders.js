import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import { AuthContext } from '../../userContext/UserContext';
import SingleMyOrder from './SingleMyOrder';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: myOrders = [], refetch, isLoading } = useQuery({
        queryKey: ['myorders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://crash-guitar-server.vercel.app/myorders?email=${user?.email}`,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('crashGuitarToken')}`
                }
            })
            const data = await res.json()

            return data
        }
    })

    const handleDeleteOrder = (id,productId)=>{
        fetch(`https://crash-guitar-server.vercel.app/products/${productId}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'Available'})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                fetch(`https://crash-guitar-server.vercel.app/myorders/${id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        toast.error('Deleted successfully')
                        refetch()
                        isLoading(false)
                    }
                })
            }
    })
    }

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='my-20 md:mx-16'>
            <h1 className='text-center text-3xl font-extrabold text-slate-800'>My Orders</h1>
            <div className='flex justify-center items-center flex-col' >
                {
                    myOrders.length > 0 ?
                        myOrders.map((myOrder, i) => <SingleMyOrder
                            i={i}
                            key={myOrder._id}
                            myOrder={myOrder}
                            handleDeleteOrder ={handleDeleteOrder}
                        ></SingleMyOrder>)
                        : <h1 className='my-16 text-center text-4xl font-bold text-slate-800'>You Have No Orders</h1>
                }
            </div>
        </div>
    );
};

export default MyOrders;