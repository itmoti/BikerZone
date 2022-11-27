import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
  const { data: buyers, refetch } = useQuery({
    queryKey: ['buyers'],
    queryFn: () => fetch(`http://localhost:5000/dashboard/allBuyers`).then(res => res.json())


  })
  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:5000/dashboard/allBuyers/${id}`, {
      method: 'DELETE',


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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((buyer, index) =>

              <tr key={index}>
                <th>{index + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button onClick={() => handleDeleteBtn(buyer._id)}>Delete</button>
                </td>
              </tr>
            )}



          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllBuyers;