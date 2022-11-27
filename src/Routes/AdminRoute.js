import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import { UserContext } from '../Context/AuthContex';
import UseAdmin from '../Hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const location = useLocation()
    const {user , loading} = useContext(UserContext)
    const  [isAdmin , isAdminLoading] = UseAdmin(user?.email)

    if(loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if(user && isAdmin) {
        return children
    }
   return <Navigate to='/login' state={{from : location}} replace />
};

export default AdminRoute;