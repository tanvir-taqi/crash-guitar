import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout/DashBoardLayout";
import Main from "../layout/Main";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllBuyers from "../pages/AllBuyers/AllBuyers";
import AllSellers from "../pages/AllSellers/AllSellers";
import Blogs from "../pages/Blogs/Blogs";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyOrders from "../pages/MyOrders/MyOrders";
import MyProducts from "../pages/MyProducts/MyProducts";
import Payment from "../pages/Payment/Payment";
import ReportedItems from "../pages/ReportedItems/ReportedItems";
import SignUp from "../pages/SignUp/SignUp";
import Products from "../Products/Products";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
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
                loader:({params})=>fetch(`https://crash-guitar-server.vercel.app/products/${params.id}`)
            },
           
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/myorders',
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/allseller',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reporteditem',
                element:<AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader : ({params})=> fetch(`https://crash-guitar-server.vercel.app/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
])