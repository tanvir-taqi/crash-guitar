import React from 'react';

const SIngleSeller = ({ seller, i, handleDeleteSeller ,handleSellerVerify}) => {
    const { name, img, email, _id, role ,verified } = seller
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-7 gap-6 items-center md:rounded-full w-full md:flex-row bg-cyan-200 my-4 p-3  '>
                <p>{i + 1}</p>
                <img src={img} className='h-20 w-20 border-b-4 border-r-2 border-l-2 border-cyan-700 p-1 rounded-full' alt="" />
                <h1 className='text-center'>{name}</h1>
                <p className='text-center'>{email}</p>
                <p className='text-center'>{role}</p>
               { !verified ?
                 <button onClick={() => handleSellerVerify(_id)} className='btn btn-xs bg-blue-600 '>Verify Seller</button>
                 :  <p className='text-center'>Verified</p>
               }
                <button onClick={() => handleDeleteSeller(_id,email)} className='btn btn-xs bg-red-600 '>X</button>
            </div>
        </div>
    );
};

export default SIngleSeller;