import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AdvertisedItem = () => {
    const [advertisedItems , setAdvertisedItems] = useState([])
    // const {data : advertisedItems } = useQuery({
    //     queryKey : ['advertisedItem'] , 
    //     queryFn : () => {
    //         fetch('http://localhost:5000/advetisedItems' , {
    //             headers :{
    //                 authHeader :  `Bearer ${localStorage.getItem('accessToken')}`
    //                }
    //         })
    //         .then(res => res.json())
           
    //     }
    // })
    useEffect(() => {
        fetch('http://localhost:5000/advetisedItems' , {
                        headers :{
                            authHeader :  `Bearer ${localStorage.getItem('accessToken')}`
                           }
                    })
                    .then(res => res.json())
                    .then(data => {
                        setAdvertisedItems(data)
                    })
    },[])
    // console.log(advertisedItems)
    return (
        <div className='mt-7'>
            <h1 className="text-3xl text-center text-primary">Advertised Products</h1>
            <section>
            
      { advertisedItems &&
        advertisedItems.map(items => <div 
             key={items?._id}
        >Need to show items</div>)
      }
            </section>
        </div>
    );
};

export default AdvertisedItem;