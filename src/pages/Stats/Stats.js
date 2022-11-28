import React, { useEffect, useState } from 'react';

const Stats = () => {
    const [statsProd, setStatsProd] = useState([])
    const [statsUsers, setStatsUsers] = useState([])
    const [statsSells, setStatsSells] = useState([])

    useEffect(() => {
        fetch('https://crash-guitar-server.vercel.app/allproducts')
            .then(res => res.json())
            .then(data => {
                setStatsProd(data)
            
            })
    }, [])

    useEffect(() => {
        fetch('https://crash-guitar-server.vercel.app/allusers')
            .then(res => res.json())
            .then(data => {
                setStatsUsers(data)
            
            })
    }, [])
    useEffect(() => {
        fetch('https://crash-guitar-server.vercel.app/soldproducts')
            .then(res => res.json())
            .then(data => {
                setStatsSells(data)
            
            })
    }, [])

    return (
        <div>
            <h1 className='text-center text-3xl font-extrabold text-slate-800'>Statistics</h1>
         <div  className='md:mx-20 my-6 grid grid-cols-1 md:grid-cols-3 justify-center gap-6 items-center' >
         <div  className='bg-cyan-200 rounded-2xl p-3'>
                <h1 className='text-3xl text-cyan-900 font-extrabold text-center'>{statsProd.length }</h1>
                <p>Total Products</p>
            </div>
            <div className='bg-cyan-200 rounded-2xl p-3'>
                <h1 className='text-3xl text-cyan-900 font-extrabold text-center'>{ statsUsers.length}</h1>
                <p>Total Users</p>
            </div>
            <div className='bg-cyan-200 rounded-2xl p-3'>
                <h1 className='text-3xl text-cyan-900 font-extrabold text-center'>{statsSells.length }</h1>
                <p>Total Sells</p>
            </div>
         </div>

        </div>
    );
};

export default Stats;