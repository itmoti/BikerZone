import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MainLayout from "../Layout/MainLayout";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers";
import ReportedItem from "../Pages/Dashboard/Admin/ReportedItem";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders";
import AddProducts from "../Pages/Dashboard/Seller/AddProducts";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Products from "../Pages/Home/Catagories/Products";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";

import PrivateRoute from "./PrivateRoute";
import SellerRouter from "./SellerRouter";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element:<PrivateRoute> <Products></Products></PrivateRoute>

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
                path: '/dashboard/AddProducts',
                element: <SellerRouter><AddProducts></AddProducts></SellerRouter>
            },
            {
                path: '/dashboard/MyProducts',
                element: <SellerRouter><MyProducts></MyProducts></SellerRouter>
            },
            {
                path: '/dashboard/allBuyers',
                element:<AdminRoute> <AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element:<AdminRoute> <AllSellers></AllSellers></AdminRoute>
            },
            {
                path : '/dashboard/reportedItems' ,
                element : <AdminRoute><ReportedItem></ReportedItem></AdminRoute>
            }

        ]
    } , 
    {
        path : '*' ,
        element :  <ErrorPage></ErrorPage>
    }
])