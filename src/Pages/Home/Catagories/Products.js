import React, { useContext, useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContex';

import BookNowModal from './BookNowModal';

const Products = () => {
    const {user} = useContext(UserContext)
    const { id } = useParams()
    const [ product ,setProduct] = useState('')
    // const [bookingData , setBookingData] = useState(null)
    // const handleBookingBtn = (event) => {
    //    event.preventDefault();
    //    const form = event.target;
    //    console.log(form)
    // }

     const [products , setProducts] = useState('')
     useEffect( () => {
        fetch(`http://localhost:5000/catagory/${id}`) 
        .then(res => res.json())
        .then(data => {console.log(data)
                    setProducts(data)
        })
     }, [])

     const handleReportToAdminBtn =(id) => {
        console.log(id)
        fetch(`http://localhost:5000/catagory/product/${id}` , {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
     }
console.log(products)
    return (
        <div>
            <h1 className="text-3xl text-center my-3">Bikes Of {id}</h1>
           <BookNowModal
        //    handleBookingBtn = { handleBookingBtn}
           product = {product}
           user = {user}

           ></BookNowModal>
          
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 '>
                { products &&
                    products?.map(product =>

                        <div
                        key={product._id}
                        className="w-[90%] mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-md">

                            <img className="rounded-t-lg" src={''} alt="" />

                            <div className="p-5">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                                    {product.productName} 
                                </h5>
     
                                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                                <p className="mb-2 text-lg font-bold tracking-tight text-white ">
                                    {product.resalePrice} 
                                </p>

                                <label onClick={() => setProduct(product)} htmlFor="bookingModal"  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Book Now
                                   
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                                </label>

                                <button className='btn btn-primary' onClick={() => handleReportToAdminBtn(product._id)} >Report To admin</button>
                            </div>
                        </div>





                    )
                }
            </div>
        </div>
    );
};

export default Products;