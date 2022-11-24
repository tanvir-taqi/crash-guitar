import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCategory from './SingleCategory';

const CategoryProducts = () => {

    const {data:category=[]} = useQuery({
        queryKey:['category'],
        queryFn:async ()=>{
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json()
            return data
        }
    })
    
    return (
        <div className='my-20 '>
            <h1 className="text-center text-5xl my-5">Category</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-20'>
            {
                category.map(cg => <SingleCategory
                key={cg._id}
                singlecategory={cg}
                ></SingleCategory>)
            }
        </div>
        </div>
    );
};

export default CategoryProducts;