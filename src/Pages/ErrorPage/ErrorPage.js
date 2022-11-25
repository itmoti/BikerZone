import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContex';
import Navbar from '../Shared/Navbar/Navbar';
import errorImage from '../ErrorPage/errorImage.png'

const ErrorPage = () => {
    const {  logOut} = useContext(UserContext)
    const handleLogout = () => {
      logOut()
      .then(() => {})
       .catch(err => console.log(err))
    } 
    const error = useRouteError()
     console.log(error)
    return (
        <div>
        <Navbar></Navbar>
        <div className='flex justify-center'>
            <div className='text-center'>
                <img className='w-2/4 mx-auto' src={errorImage} alt='loading' />
            <p className='text-error'>Something went wrong</p>
            <p className='text-error'>{error?.statusText || error?.message}</p>
          
            <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
            <h1>Please <button className='btn btn-error btn-sm' onClick={handleLogout}>Logout</button> and <span className='font-bold'>login</span> back</h1>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;