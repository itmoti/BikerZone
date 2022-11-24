import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../Catagory.json'
import { UserContext } from '../../../Context/AuthContex';
import data2 from '../../../data.json'


const Catagories = () => {
    const { user } = useContext(UserContext)

    const [catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
   
    return (
        <div className='mt-7'>
            <h1 className="text-2xl text-center text-primary">  Caragories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6'>
                { catagories && catagories?.map(catagory =>


                    <div className="card w-52 mx-auto bg-base-100 shadow-xl">

                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <Link to={`/catagory/${catagory.CatagoryName}`} className="card-title">{catagory.CatagoryName}</Link>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>


                )}
            </div>
        </div>
    );
};

export default Catagories;