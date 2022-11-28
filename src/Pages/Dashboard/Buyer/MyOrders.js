import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContex';

const MyOrders = () => {
    const { user } = useContext(UserContext)

    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setMyOrders(data))
        }
    }, [user?.email])
    console.log('orderrrrrrrrrr' , myOrders)

 
    return (
        <div>
      

<div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Email</th>
        <th>Admin </th>
        <th>Delete </th>
      </tr>
    </thead>
    <tbody>
      {
        myOrders.length > 0 && myOrders.map((order , i) =>  <tr key={order._id}>
        <th>{i+1}</th>
        <td>{order.ProductName}</td>
        <td>{order.ResellPrice} BDT</td>
        <td>
         
          {order.paid  ? 
        <p className='text-success'>Paid</p>
      :
      <Link to={`/dashboard/payment/${order._id}`} className='btn btn-xs btn-primary'>Make Payment</Link>
      }</td>
        <td><button className='btn btn-xs btn-error'>Delete</button></td>
      </tr> )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;