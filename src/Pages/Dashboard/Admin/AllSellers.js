import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
  const { data: sellers, refetch } = useQuery({
    queryKey: ['Sellers'],
    queryFn: () => fetch(`http://localhost:5000/dashboard/allSellers`, {
      headers: {
        authHeader: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  })
  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:5000/dashboard/allSellers/${id}`, {
      method: 'DELETE',


    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        refetch()
      })
  }

  const handleVerifyBtn = (id) => {
    fetch(`http://localhost:5000/dashboard/allSellers/verify/${id}`, {
      method: 'Put',


    })
      .then(res => res.json())
      .then(data => {
        refetch()
      })
  }
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
                    <p className='text-primary'> verified</p>
                    :
                    <button className='btn btn-sm btn-primary' onClick={() => handleVerifyBtn(seller._id)}>Verify</button>
                  }
                </td>
                <td>
                  <button onClick={() => handleDeleteBtn(seller._id)}>Delete</button>
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