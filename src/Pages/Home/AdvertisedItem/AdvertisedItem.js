import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { UserContext } from '../../../Context/AuthContex';
import BookNowModal from '../Catagories/BookNowModal';

const AdvertisedItem = () => {
    const { user } = useContext(UserContext)
    const [advertisedItems, setAdvertisedItems] = useState([])
    const [product, setProduct] = useState('')

    const handleReportToAdminBtn = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/catagory/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log('reported')
                toast.error('reported successfully')

            })
    }


    useEffect(() => {
        fetch('http://localhost:5000/advetisedItems', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdvertisedItems(data)
            })
    }, [])
    console.log(advertisedItems)
    return (
        <div className='mt-7'>
            <h1 className="text-3xl text-center text-primary">Advertised Products</h1>
            <section>

                {product && <BookNowModal
                    //    handleBookingBtn = { handleBookingBtn}
                    product={product}
                    user={user}
                    setProduct={setProduct}

                ></BookNowModal>}
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 '>
                    {advertisedItems.length >0 &&
                        advertisedItems?.map(product =>

                            <div
                                key={product._id}
                                className="w-[80%] card  p-3 mx-auto h-auto  border rounded-lg bg-base-100 shadow-xl">
                                <figure className='h-2/4'> <img className='' src={product.ImageUrl} alt='loading' /></figure>
                                <h1 className="text-xl font-bold">{product.ProductName}</h1>
                                <div className='flex justify-between'>

                                    <div>

                                        <div className='text-sm'>
                                            <p> <span className='font-semibold'>Location</span>: <br />{product.Location}</p>
                                            <p> <span className='font-semibold'>Using Year:</span> <br /> {product.YearsOfUsage} Years</p>
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
            </section>
        </div>
    );
};

export default AdvertisedItem;