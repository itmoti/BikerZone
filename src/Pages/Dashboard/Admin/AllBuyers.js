import {  useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const {data : buyers} = useQuery({
        queryKey : ['buyers'] , 
        queryFn : () =>  fetch(`http://localhost:5000/dashboard/allBuyers`).then(res => res.json())
    
    
      })
      console.log(buyers)
    return (
        <div>
            All buyersjhhhhhhhhhhh
        </div>
    );
};

export default AllBuyers;