import React from 'react';

const BookNowModal = ({handleBookingBtn}) => {

    return (
        <div>
         
<input type="checkbox" id="bookingModal" className="modal-toggle" />
<form onSubmit={handleBookingBtn} className="modal">
  <div className="modal-box relative">
    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <input type='text' name='text' />
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <button type='submit'>Submit</button>
  </div>
  
</form>
        </div>
    );
};

export default BookNowModal;