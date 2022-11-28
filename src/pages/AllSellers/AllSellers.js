import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import SIngleSeller from './SIngleSeller';

const AllSellers = () => {
    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allseller`)
            const data = await res.json();
            return data
        }

    })

    const handleDeleteSeller = (id, email) => {
        const agree = window.confirm('Are you sure you want to delete the user?');
        if (!agree) {
            return
        }
        else {
            fetch(`http://localhost:5000/allseller/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {

                        fetch(`http://localhost:5000/usersproducts?email=${email}`, {
                            method: 'DELETE',
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.error("Seller Deleted Successfully")
                                    isLoading(false)
                                    refetch()
                                }
                            })

                    }
                })
        }
    }




    const handleSellerVerify = (id) => {

        const agree = window.confirm('Are you sure you want to verify the seller?');
        if (!agree) {
            return
        }
        else {

            fetch(`http://localhost:5000/allseller/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Successfully Verified")

                        refetch()
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
                allSellers.map((seller, i) => <SIngleSeller
                    key={seller._id}
                    i={i}
                    seller={seller}
                    handleDeleteSeller={handleDeleteSeller}
                    handleSellerVerify={handleSellerVerify}
                ></SIngleSeller>)
            }
        </div>
    );
};

export default AllSellers;