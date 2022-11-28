import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../componenets/LoadingSpinner';
import SingleReportedItem from './SingleReportedItem';

const ReportedItems = () => {

    const {data:reporteditem=[],isLoading,refetch} = useQuery({
        queryKey:['reporteditems'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/reporteditems')
            const data = await res.json()
     
            return data 
        }
    })

    const handleDeleteItem = (id) => {
        
        const confirm = window.confirm('Are you sure you want to delete th product?')
        if(!confirm){
            return
        }
        fetch(`http://localhost:5000/products/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.error('Deleted successfully')
                refetch()
                
            }
        })
        
    }

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            
            <h1 className='text-center text-3xl font-extrabold text-slate-800'>Reported Items</h1>
            {
                reporteditem.length > 0 ? 
                reporteditem.map((item,i) => <SingleReportedItem
                key={item._id}
                item={item}
                handleDeleteItem={handleDeleteItem}
                i={i}
                ></SingleReportedItem>) 
                : <h1 className='my-16 text-center text-4xl font-bold text-slate-800'>No Reported Items</h1>
            }
            
        </div>
    );
};

export default ReportedItems;