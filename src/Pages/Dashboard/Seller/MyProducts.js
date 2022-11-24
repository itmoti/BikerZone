import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context/AuthContex';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const MyProducts = () => {
    const {user} = useContext(UserContext)
    console.log(user.email)
    // const [products , setProducts] = useState([])

  const {data:products  , isLoading, error } = useQuery({
    queryKey : ['products'] , 
    queryFn : () =>  fetch(`http://localhost:5000/dashboard/products/${user.email}`).then(res => res.json())


  })
console.log(products)
   
    return (
        <div>
            my products
            <div>
               {products?.map(
                product => <div 
                 key={product._id}
                >Products need to show</div>
               )}
            </div>
        </div>
    );
};

export default MyProducts;