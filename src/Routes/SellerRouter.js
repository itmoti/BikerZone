import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import { UserContext } from '../Context/AuthContex';
import UseAdmin from '../Hooks/UseAdmin';
import UseSeller from '../Hooks/UseSeller';

const SellerRouter = ({children}) => {
    const location = useLocation()
    const {user , loading} = useContext(UserContext)
    const [isSeller, isSellerLoading] = UseSeller(user?.email)
    if(loading || isSellerLoading) {
        return <Loader></Loader>
    }
    if(user && isSeller) {
        return children
    }
 return <Navigate to='/login' state={{from : location}} replace />
};

export default SellerRouter;