import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContex';
import axios from 'axios';

const AddProducts = () => {
    const { user } = useContext(UserContext);
    console.log(user)
    const navigate = useNavigate()

    //    const [productInfo  , setProductInfo] = useState('')
    const [catagories, setCatagories] = useState([])
    // useEffect(() => {
    //     fetch('https://bikezone-serverside-itmoti.vercel.app/catagories')
    //         .then(res => res.json())
    //         .then(data => setCatagories(data))
    // }, [])
    useEffect(() => {
        axios.get('https://bikezone-serverside-itmoti.vercel.app/catagories')
        .then(data => {
          
            setCatagories(data.data)
        })
    }, [])

    const handleAddBtn = event => {
        event.preventDefault()
        const form = event.target;
        const ProductName = form.productName.value;
        const ResellPrice = form.resellPrice.value;
        const OriginalPrice = form.originalPrice.value;
        const ConditionTpe = form.conditionType.value;
        const MobileNumber = form.mobileNumber.value;
        const Location = form.location.value;
        const Description = form.description.value;
        const YearsOfPurchase = form.yearOfPurchase.value;
        const CatagoryName = form.catagoryName.value;
        const YearsOfUsage = form.yearOfUsage.value;
        const ImageUrl = form.imageUrl.value;

        const productInfo = {

            ProductName,
            CatagoryName,
            ResellPrice,
            OriginalPrice,
            ConditionTpe,
            MobileNumber,
            Location,
            Description,
            YearsOfPurchase,
            YearsOfUsage,
            SellerName: user.displayName,
            SellerEmail: user.email,
            AddedTime: new Date().toLocaleDateString(),
            ImageUrl

        }
        // setProductInfo(productInfo)
        fetch('https://bikezone-serverside-itmoti.vercel.app/dashboard/Products',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(productInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    navigate('/dashboard/MyProducts')
                    toast.success('Succesfully Added')
                }
            })
    }






    return (
        <div >
            Please Add Products



            <form onSubmit={handleAddBtn} className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Name</span> </label>
                <input type="text" placeholder="Product Name" name='productName' className="input input-bordered input-sm input-primary w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Image Url</span> </label>
                <input type="text" placeholder="Image Url" name='imageUrl' className="input input-bordered input-sm input-primary w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Resell Price</span> </label>
                <input type="number" placeholder="Resell Price" name='resellPrice' className="input input-bordered input-sm input-primary w-full max-w-xs" required />

                <label className="label">
                    <span className="label-text">Original Price</span> </label>
                <input type="text" placeholder="Original Price" name='originalPrice' className="input input-bordered input-sm input-primary w-full max-w-xs" required />

                <label className="label">
                    <span className="label-text">Condition Type</span> </label>
                {/* <input type="text" placeholder="Condition Type" name='conditionType' className="input input-bordered input-sm input-primary w-full max-w-xs" required /> */}
                <select name='conditionType' className="input input-bordered input-sm input-primary w-full max-w-xs" required>
                    <option value='Excellent'>Excellent</option>
                    <option value='Good'>Good</option>
                    <option value='Fair'>Fair</option>



                </select>
                <label className="label">
                    <span className="label-text">Select Catagory</span> </label>
                <select name='catagoryName' className="input input-bordered input-sm input-primary w-full max-w-xs" required>

                    {catagories.map(catagory =>
                        <option
                        key={catagory._id}
                        value={catagory.CatagoryName}>{catagory.CatagoryName}</option>
                    )}


                </select>
                <label className="label">
                    <span className="label-text">Mobile Number</span> </label>
                <input type="number" placeholder="Mobile Number" name='mobileNumber' className="input input-bordered input-sm input-primary w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Location</span> </label>
                <input type="text" placeholder="Location" name='location' className="input input-bordered input-sm input-primary w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Description</span> </label>
                <input type="text" placeholder="Description" name='description' className="input input-bordered input-sm input-primary w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Year of Purchase</span> </label>
                <input type="date" placeholder="Year of Purchase" name='yearOfPurchase' className="input input-bordered input-sm input-primary w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Year of Usage</span> </label>
                <input type="number" placeholder="Year of Usage" name='yearOfUsage' className="input input-bordered input-sm input-primary w-full max-w-xs" required />
                <button type='submit' className="btn mt-3 btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">Add</button>
            </form>

        </div>
    );
};

export default AddProducts;