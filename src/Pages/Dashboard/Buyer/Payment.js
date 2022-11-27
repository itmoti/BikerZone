import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../Components/Loader';

const Payment = () => {
    const navigation = useNavigation()
    const bookings = useLoaderData()
if(navigation.state === 'loading') {
    return <Loader></Loader>
}
    console.log(bookings)
    
    return (
        <div>
            df
        </div>
    );
};

export default Payment;