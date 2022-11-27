import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js'

import Loader from '../../../Components/Loader';
import Checkoutform from './Checkoutform';
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

const Payment = () => {
    const navigation = useNavigation()
    const bookings = useLoaderData()
if(navigation.state === 'loading') {
    return <Loader></Loader>
}
    console.log(bookings)
    
    return (
        <div>
            <h3 className="text-3xl">Payment for <span className='font-bold'>{bookings.ProductName}</span></h3>
            <p className="text-xl">Please pay $<span className='font-bold'>{bookings.ResellPrice}</span> </p>
            <div className='w-96 my-7'>
                <Elements stripe={stripePromise}>
                  <Checkoutform 
                    bookings = {bookings}
                  >

                  </Checkoutform>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;