import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
             <div className="w-12 h-12 text-center my-20 rounded-full animate-spin border-x-8 border-solid border-cyan-500 border-t-transparent"></div>
        </div>
    );
};

export default LoadingSpinner;