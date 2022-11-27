import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContex';

import BookNowModal from './BookNowModal';

const Products = () => {
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [product, setProduct] = useState('')
    // const [bookingData , setBookingData] = useState(null)
    // const handleBookingBtn = (event) => {
    //    event.preventDefault();
    //    const form = event.target;
    //    console.log(form)
    // }

    const [products, setProducts] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/catagory/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    const handleReportToAdminBtn = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/catagory/product/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged)
              {  toast.error('Reported Successfully')}
            
            })
    }
    console.log(products)
    return (
        <div>
            <h1 className="text-3xl text-center my-3">Bikes Of {id}</h1>
           {product &&  <BookNowModal
                //    handleBookingBtn = { handleBookingBtn}
                product={product}
                user={user}
                setProduct={setProduct}

            ></BookNowModal>}
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 '>
                {products &&
                    products?.map(product =>

                        <div
                            key={product._id}
                            className="w-[80%] card  p-3 mx-auto h-auto  border rounded-lg bg-base-100 shadow-xl">
                            <figure className='h-2/4'> <img className='' src={product.ImageUrl} alt='loading' /></figure>
                            <h1 className="text-xl font-bold">{product.ProductName}</h1>
                            <div className='flex justify-between'>

                                <div>

                                    <div className='text-sm'>
                                        <p> <span className='font-semibold'>Location</span>: <br />{product.Location}</p>
                                        <p> <span className='font-semibold'>Using Year</span> <br />: {product.YearsOfUsage} Years</p>
                                        <p> <span className='font-semibold'>Resell Price</span>: <br /> {product.ResellPrice} BDT</p>
                                        <p> <span className='font-semibold'>Condition</span>: <br /> {product.ConditionTpe} </p>
                                    </div>
                                </div>
                                <div>
                                    <p><span className='font-semibold'>Posted Time</span> : <br />{product.AddedTime}</p>
                                    <p><span className='font-semibold'>Original Price</span> : <br />{product.OriginalPrice} BDT</p>
                                </div>
                            </div>

                            <div className='card-actions items-start justify-end '>
                                <label onClick={() => setProduct(product)} htmlFor="bookingModal" className="btn btn-primary btn-sm">
                                    Book Now

                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                                </label>
                                <button className='btn btn-error btn-sm' onClick={() => handleReportToAdminBtn(product._id)} >Report To admin</button>
                            </div>


                        </div>





                    )

                }
            </div>




        </div>
    );
};

export default Products;