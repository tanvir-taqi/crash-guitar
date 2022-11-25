import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddProduct from "../pages/AddProduct/AddProduct";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyProducts from "../pages/MyProducts/MyProducts";
import Products from "../Products/Products";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
        ]
    }
])