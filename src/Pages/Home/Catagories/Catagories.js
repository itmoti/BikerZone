import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../../Context/AuthContex';



const Catagories = () => {
    const { user } = useContext(UserContext)

    const [catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('https://bikezone-serverside-itmoti.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])

    return (
        <div className='my-7'>
            <h1 className="text-2xl text-center text-primary">  Catagories</h1>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6'>
                {catagories && catagories?.map(catagory =>


                    <div key={catagory._id} className="card border w-52 mx-auto bg-base-100 shadow-xl">

                        <figure className='h-2/4'><img className='image-full' src={catagory.CatagoryPicture} alt="Loading" /></figure>
                        <div className="card-body p-5">
                            <h1 className="card-title text-2xl text-100">{catagory.CatagoryName}</h1>

                            <p><span className='font-semibold'>{catagory.CatagoryName}</span> is an international brand with great specialities.  </p>
                            <div className="card-actions justify-end">
                                <Link className='btn btn-primary btn-sm text-white' to={`/catagory/${catagory.CatagoryName}`} >Show bikes</Link>
                            </div>

                        </div>
                    </div>


                )}
            </div>
        </div>
    );
};

export default Catagories;