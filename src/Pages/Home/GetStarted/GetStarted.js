import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
       
            <div className="hero min-h-16 bg-base-100 border my-8">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://img.freepik.com/premium-vector/premium-big-bike-motorcycle-emblem-illustration-label-vector-best-motorcycle-related-industry_289688-127.jpg?w=2000" alt='Loading' className=" lg:max-w-sm   rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">Wanna Order Cool Bikes
      <br/>
       at LOW PRICE!</h1>
      <p className="py-6">We sell secondhand bikes but we always thinks about customers</p>
      <Link to={'/signup'} className="btn btn-primary text-white">Sign Up N0w</Link>
    </div>
  </div>
</div>
        
    );
};

export default GetStarted;