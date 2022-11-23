import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MainLayout from "../Layout/MainLayout";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders";
import AddProducts from "../Pages/Dashboard/Seller/AddProducts";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import Products from "../Pages/Home/Catagories/Products";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element: <Products></Products>

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            },
            {

                path: '/login',
                element: <Login></Login>

            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/seller/AddProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/seller/MyProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/admin/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/admin/allSellers',
                element: <AllSellers></AllSellers>
            },

        ]
    }
])