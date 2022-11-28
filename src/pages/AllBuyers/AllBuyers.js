import { useQuery } from '@tanstack/react-query';
import { info } from 'daisyui/src/colors/colorNames';
import React from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import SingleBuyer from './SingleBuyer';

const AllBuyers = () => {
    const { data: allBuyers = [], isLoading ,refetch} = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            const res = await fetch(`https://crash-guitar-server.vercel.app/allbuyer`,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('crashGuitarToken')}`
                }
            })
            const data = await res.json();
            return data
        }

    })


    const handleDeleteBuyer = (id) => {
        const agree = window.confirm('Are you sure you want to delete the user?');
        if (!agree) {
            return
        }
        else {
                fetch(`https://crash-guitar-server.vercel.app/allbuyer/${id}`,{
                    method:'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        toast.error("Buyer Deleted Successfully")
                        refetch()
                        isLoading(false)
                    }
                })
        }
    }

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='md:mx-20'>
            {
                allBuyers.map((buyer, i) => <SingleBuyer
                    key={buyer._id}
                    i={i}
                    buyer={buyer}
                    handleDeleteBuyer={handleDeleteBuyer}
                ></SingleBuyer>)
            }
        </div>
    );
};

export default AllBuyers;