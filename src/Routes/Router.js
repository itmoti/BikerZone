import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
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
    }
])