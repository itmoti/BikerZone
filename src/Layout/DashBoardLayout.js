import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../Context/AuthContex';
import UseAdmin from '../Hooks/UseAdmin';
import UseSeller from '../Hooks/UseSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const {user} = useContext(UserContext)
    const [isSeller] = UseSeller(user?.email)
    const [isAdmin]  = UseAdmin(user?.email)
   
    const items =
        <>

           {
            isAdmin ||  <li><Link to={'/dashboard'}>My Orders</Link></li> 
           } 
            {
                isSeller &&  <><li><Link to={'/dashboard/AddProducts'}>Add a Product</Link></li> 
                <li><Link to={ '/dashboard/MyProducts'}>My Products</Link></li> </>
            }
            {
                isAdmin && <>
                <li><Link to={'/dashboard/allBuyers'}>All Buyers</Link></li> 
            <li><Link to={'/dashboard/allSellers'}>All Sellers</Link></li>
            <li><Link to={'/dashboard/reportedItems'}>Reported Item</Link></li>
                </>
            }
        </>
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl text-center text-primary">DashBoard  <div className='float-right'>
           <label htmlFor="dashBoardDrawer" className="drawer-button lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
           </div></h1>
          
            <div className="drawer drawer-mobile">
                <input id="dashBoardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-10 ">
                    <Outlet></Outlet>
                    

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