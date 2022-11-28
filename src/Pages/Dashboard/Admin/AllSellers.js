import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const AllSellers = () => {
  const { data: sellers, refetch } = useQuery({
    queryKey: ['Sellers'],
    queryFn: () => fetch(`https://bikezone-serverside-itmoti.vercel.app/dashboard/allSellers`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  })
  const handleDeleteBtn = (id) => {
    fetch(`https://bikezone-serverside-itmoti.vercel.app/dashboard/allSellers/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },


    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        refetch()
      })
  }

  const handleVerifyBtn = (id) => {
    fetch(`https://bikezone-serverside-itmoti.vercel.app/dashboard/allSellers/verify/${id}`, {
      method: 'Put',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }


    })
      .then(res => res.json())
      .then(data => {
        refetch()
      })
  }
  console.log(sellers)
  return (
    <div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, index) =>

              <tr key={index}>
                <th>{index + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller.Verified ?
                    <AiFillCheckCircle
                    className='text-blue-700 h-6'
                    ></AiFillCheckCircle>
                    :
                    <button className='btn btn-sm btn-primary' onClick={() => handleVerifyBtn(seller._id)}>Verify</button>
                  }
                </td>
                <td>
                  <button className='btn btn-sm btn-error' onClick={() => handleDeleteBtn(seller._id)}>Delete</button>
                </td>
              </tr>
            )}



          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllSellers;