import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({singlecategory}) => {
    const {category,photo,_id} = singlecategory;
    return (
        <Link to={`/category/${_id}`}  className="card p-2 lg:card-side bg-gray-200 shadow-xl">
            <figure><img src={photo} className='h-16 w-16 rounded-full' alt="Album" /></figure>
            <div className="card-body">
               
                <p className='text-center text-2xl font-bold'>{category}</p>
               
            </div>
        </Link>
    );
};

export default SingleCategory;