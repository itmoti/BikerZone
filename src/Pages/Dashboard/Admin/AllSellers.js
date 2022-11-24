import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const {data : buyers} = useQuery({
        queryKey : ['Sellers'] , 
        queryFn : () =>  fetch(`http://localhost:5000/dashboard/allSellers`).then(res => res.json())
    })
      console.log(buyers)
    return (
        <div>
            all sellers
        </div>
    );
};

export default AllSellers;