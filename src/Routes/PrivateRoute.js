import userEvent from '@testing-library/user-event';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import { UserContext } from '../Context/AuthContex';

const PrivateRoute = ({ children }) => {

    const { user, loading, logOut } = useContext(UserContext);
    const [valid, setValid] = useState(null)
    useEffect(() => {
        if (user?.email) {
            fetch(`https://bikezone-serverside-itmoti.vercel.app/validUser/${user?.email}`,
                {
                    headers: {

                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data.result)
                    setValid(data.result)
                    if (!data?.result) {
                        console.log('isnifwe')
                        logOut()
                    }

                })
        }
    }, [user?.email])
    if (loading) {
        return <Loader></Loader>
    }




    if (!user) {
        logOut()
        return <Navigate to='/login'

        // state={{from : location}} replace
        />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;