import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContex';

const Navbar = () => {
    const {user ,logOut } = useContext(UserContext)
   
    const items = <>
        <li><Link to={'/'}>Home</Link></li>
        {user && <li><Link to={'/Dashboard'}>DashBoard</Link></li>}
        <li><Link>Blog</Link></li>
        
    </>
    return (
        <div className="navbar  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                         {items}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">BikeZone</Link>
            </div>
          
            
            <div className="navbar-end">
                <ul className="menu menu-horizontal p-0 hidden lg:flex">
                  {items}
                </ul>
            {
                !user ? <Link to='/login' className="btn btn-primary btn-sm">Login</Link> 
                : <Link onClick={() =>  logOut()} className="btn btn-primary btn-sm text-white">Logout</Link>
            }
  </div>
        </div>
    );
};

export default Navbar;