import React, { useContext, useState } from 'react';
import { BiAlignMiddle } from 'react-icons/bi';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import Footer from '../../pages/shared/Footer/Footer';
import Navbar from '../../pages/shared/Navbar/Navbar';
import { AuthContext } from '../../userContext/UserContext';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [display, setDisplay] = useState(false)
    const [role, roleLoading] = useRole(user?.email)
    return (
        <div className=''>


            <div className='' >
                <Navbar></Navbar>
                <div className={` bg-gray-100 z-50 w-full header py-5 header-container  flex flex-col md:flex-row justify-around items-center`}>
                    

                        <button className='block md:hidden' onClick={() => setDisplay(!display)}><BiAlignMiddle></BiAlignMiddle></button>
                  
                    <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'}`} >
                        <div onClick={() => setDisplay(false)} className="nav-menu-link items-start flex flex-col md:flex-row py-12 md:py-1 ">
                        {
                            user && role === 'seller' ? <>
                                <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-cyan-700' : 'mr-4 text-lg font-semibold   my-2')} to='/dashboard/addproduct'>Add A Product</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-cyan-700' : 'mr-4 text-lg font-semibold   my-2')} to='/dashboard/myproducts'>My Products</NavLink>

                            </> : ''
                        }
                        {
                            user && role === 'buyer' ? <>
                                <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-cyan-700' : 'mr-4 text-lg font-semibold   my-2')} to='/dashboard/myorders'>My Orders</NavLink>

                            </> : ''
                        }

                        </div>





                    </div>
                </div>

                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoardLayout;