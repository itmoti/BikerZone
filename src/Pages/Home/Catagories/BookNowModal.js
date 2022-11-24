import React, { useEffect } from 'react';
import toast from 'react-hot-toast';


const BookNowModal = ({ handleBookingBtn  ,product ,user}) => {
        const {displayName ,email } = user
        const {ProductName,ResellPrice
,_id } = product
console.log(ResellPrice)
        const handleModalbtn = event => {
          event.preventDefault();
            const bookingInfo = {
              ProductName ,
               ResellPrice ,
               Productid : _id ,
              BuyerName : displayName ,
              BuyerEmail : email ,
              BuyerNumber : event.target.mobileNumber.value  ,
              MeetingLocation : event.target.location.value 
            }
            fetch('http://localhost:5000/bookings' , {
              method : 'POST' , 
              headers : {
                'content-type' : 'application/json'
              } , 
              body : JSON.stringify(bookingInfo)
            })
            .then(res => res.json())
            .then(data => {console.log(data)
                    toast.success('Items Booked')
            })
        }
  return (
    <div>

      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <form onSubmit={handleModalbtn} className="modal">
        <div className="modal-box   ">
          <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Booking for {ProductName}</h3>


          <div className='flex flex-col'>
          <label className="label"><span className="label-text">Product Name</span> </label>
          <input type="text"  defaultValue={ProductName}  name='productName' className="input input-bordered input-sm input-primary w-full max-w-xs" disabled required />
          <label className="label"><span className="label-text">Product Price</span> </label>
          <input type="text" defaultValue={ResellPrice}  placeholder="Product Price" name='productPrice' className="input input-bordered input-sm input-primary w-full max-w-xs" disabled required />
          <label className="label"><span className="label-text">User Name</span> </label>
          <input type="text" defaultValue={displayName} placeholder="Product User" name='UserName' className="input input-bordered input-sm input-primary w-full max-w-xs" disabled required />
          <label className="label"><span className="label-text">Email</span> </label>
          <input type="text" defaultValue={email}  name='email' className="input input-bordered input-sm input-primary w-full max-w-xs" disabled required />
          <label className="label"><span className="label-text">Location</span> </label>
          <input type="text"  placeholder="Location" name='location' className="input input-bordered input-sm input-primary w-full max-w-xs"  required />
          <label className="label"><span className="label-text">Mobile Number</span> </label>
          <input type="text"  placeholder="Mobile Number" name='mobileNumber' className="input input-bordered input-sm input-primary w-full max-w-xs"  required />
          <button type='submit' className="btn w-28 mt-3 btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">Submit</button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default BookNowModal;