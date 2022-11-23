import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";

 export const Router = createBrowserRouter([
    {
        path : '/' ,
        element : <MainLayout></MainLayout> , 
        children : [
            {
                path : '/' , 
                element : <Home></Home>
            }  , 

        ]
    }
])