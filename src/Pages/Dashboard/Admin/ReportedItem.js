import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const ReportedItem = () => {

   const {data : reportedItems , refetch} = useQuery({
    queryKey : ['reportedItems'] , 
    queryFn : () =>  fetch(`http://localhost:5000/dashboard/reportedItems`).then(res => res.json())
})
const handleDeleteBtn =(id) => {
   fetch(`http://localhost:5000/dashboard/reportedproducts/${id}` , {
    method : 'DELETE'
   })
   .then(res => res.json())
   .then(data => {
    console.log(data)
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
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Uploader</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {reportedItems?.map((items ,index) =>
                
                <tr key={index}>
                  <th>{index +1}</th>
                  <td>{items.ProductName}</td>
                  <td>{items.ResellPrice}</td>
                  <td>{items.SellerName}</td>
                  <td>
                    <button className='btn btn-error btn-sm' onClick={() => handleDeleteBtn(items._id)}>Delete</button>
                  </td>
                </tr>
                )}
                
              
              
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default ReportedItem;