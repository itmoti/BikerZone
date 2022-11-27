import React, { useContext } from 'react';
import { UserContext } from '../../../Context/AuthContex';
import { useQuery } from '@tanstack/react-query'
import Loader from '../../../Components/Loader';

const MyProducts = () => {
  const { user } = useContext(UserContext)
  console.log(user.email)
  // const [products , setProducts] = useState([])

  const { data: products, isLoading, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch(`http://localhost:5000/dashboard/products/${user.email}`).then(res => res.json())


  })
  const handleAdvertiseBtn = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/dashboard/Products/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:5000/dashboard/products/${id}`, {
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
  if (isLoading) {
    return <Loader></Loader>
  }

  console.log(products)
  return (
    <div>
            <h1 className="text-3xl font-bold my-3">My Products</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>price</th>
              <th>Sales Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {


              products?.map((product, index) =>

                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{product.ProductName}</td>
                  <td>${product.ResellPrice}</td>
                  <td>
                    {
                      product.Adveritse === true ? <span className='text-primary'>Advertised</span> : <button className='btn btn-primary btn-sm' onClick={() => handleAdvertiseBtn(product._id)}>Advertise</button>
                    }

                  </td>
                  <td>
                    <button className='btn btn-primary btn-sm' onClick={() => handleDeleteBtn(product._id)}>Delete</button>

                  </td>
                </tr>
              )

            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;