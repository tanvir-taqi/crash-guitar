import React from 'react';

const HomeBanner = () => {
    return (
        <div>
               <div className="container md:mx-auto md:p-6 p-2 md:py-20  my-10  flex flex-col md:flex-row items-center gap-6" >
                <div >

                <h1 className='text-5xl font-extrabold'>Welcome To  <span className='font-bold flex  text-3xl md:text-5xl'><h1 className='text-cyan-600 title-navbar'>Crash Guitar</h1></span></h1>
                <p className='text-xl mb-4 font-semibold'>Hello music lovers!!... Want to buy used guitars from anywhere in the world? You are in the right place.You can also sell your old buddies here.Safety and Security is our main policy.Grab Yours Now!!</p>
                <p className='text-white mt-4 bg-cyan-500 py-2 px-5 rounded-tr-3xl` '>Grab Yours Now!!!</p>
                </div>
                <div className='w-full'>
                        <img className='w-full rounded-lg' src="https://www.shutterstock.com/image-photo/close-man-hand-playing-guitar-260nw-573445777.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;