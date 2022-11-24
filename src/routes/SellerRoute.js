import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../componenets/LoadingSpinner';
import useRole from '../hooks/useRole';
import { AuthContext } from '../userContext/UserContext';

const SellerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    console.log(user);
    const [role,roleLoading] = useRole(user?.email)
    const location = useLocation();


    if(loading || roleLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user && role === 'seller'){
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default SellerRoute;