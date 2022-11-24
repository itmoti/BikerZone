import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const items =
        <>

            <li><Link to={'/dashboard'}>My Orders</Link></li>   Buyers 
             <li><Link to={'/dashboard/AddProducts'}>Add a Product</Link></li> seller
            <li><Link to={ '/dashboard/MyProducts'}>My Products</Link></li> seller
            <li><Link to={'/dashboard/allBuyers'}>All Buyers</Link></li> admin
            <li><Link to={'/dashboard/allSellers'}>All Sellers</Link></li>
            <li><Link to={'/dashboard/reportedItems'}>Reported Item</Link></li>
        </>
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl text-center text-primary">DashBoard</h1>
            <div className="drawer drawer-mobile">
                <input id="dashBoardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-10 ">
                    <Outlet></Outlet>
                    <label htmlFor="dashBoardDrawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {items}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;