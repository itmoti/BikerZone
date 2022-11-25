import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const ReportedItem = () => {

   const {data : reportedItems , refetch} = useQuery({
    queryKey : ['reportedItems'] , 
    queryFn : () =>  fetch(`http://localhost:5000/dashboard/reportedItems`).then(res => res.json())
})
console.log(reportedItems)
    return (
        <div>
            reported item
        </div>
    );
};

export default ReportedItem;