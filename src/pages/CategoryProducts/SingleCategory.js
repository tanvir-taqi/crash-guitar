import React from 'react';

const SingleCategory = ({singlecategory}) => {
    const {category,photo,_id} = singlecategory;
    return (
        <div className="card p-2 lg:card-side bg-gray-200 shadow-xl">
            <figure><img src={photo} className='h-16 w-16 rounded-full' alt="Album" /></figure>
            <div className="card-body">
               
                <p className='text-center text-2xl font-bold'>{category}</p>
               
            </div>
        </div>
    );
};

export default SingleCategory;