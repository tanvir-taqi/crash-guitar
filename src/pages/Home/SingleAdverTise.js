import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import { AuthContext } from '../../userContext/UserContext';

const SingleAdverTise = ({ product, setCurrentProduct }) => {
    const {user} = useContext(AuthContext)
    const [role , roleLoading] = useRole(user?.email)
    
    return (
        <Link to={`/product/${product._id}`} className='relative'>
            <img src={product.productPhoto} className='w-72 h-64 rounded-xl border-b-4 border-r-2 border-l-8 border-cyan-700  ' alt="" />

            {
                role === 'buyer'  ? <label
                    htmlFor="booking-modal"
                    onClick={() => setCurrentProduct(product)}
                    className=' absolute top-1/2  btn capitalize outline-none btn-sm border-none bg-cyan-600  font-semibold rounded-full hover:text-black hover:bg-cyan-400'
                >Book Now</label> : <p className='absolute top-1/2 bg-cyan-900 rounded-full p-1 text-cyan-600 mx-3 font-bold'> {product.status}</p>
            }

        </Link>
    );
};

export default SingleAdverTise;