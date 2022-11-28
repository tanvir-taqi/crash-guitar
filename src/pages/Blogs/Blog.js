import React from 'react';

const Blog = ({blog}) => {
    const {question , answer} = blog;
    return (
        <div>
           <div className='md:p-10 p-2 md:m-20 m-4  space-y-3'>
            <h2 className="text-2xl font-bold text-center text-cyan-900 ">{question}</h2>
            <p className='text-justify'>{answer}</p>
            
        </div>
        </div>
    );
};

export default Blog;