import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center py-20'>
            <img src='emo.jpg' className='h-96 w-96' alt="" />
            <p className='text-center text-6xl text-cyan-800'>Some Error Occured</p>
            
        </div>
    );
};

export default ErrorPage;