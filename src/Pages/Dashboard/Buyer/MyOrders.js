import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context/AuthContex';

const MyOrders = () => {
    const {user} = useContext(UserContext)
   
    const [myOrders , setMyOrders] = useState([])
    useEffect(() => {
       if(user?.email) {
        fetch(`http://localhost:5000/bookings?email=${user?.email}` , {
            headers :{
                authHeader :  `Bearer ${localStorage.getItem('accessToken')}`
               }
        })
        .then(res => res.json())
        .then(data => setMyOrders(data))
       }
    } , [user.email])
    console.log(myOrders)
    return (
        <div>
            My orders
        </div>
    );
};

export default MyOrders;