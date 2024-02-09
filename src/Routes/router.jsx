import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import CheckOut from "../pages/CheckOut/CheckOut";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Orders from "../pages/Orders/Orders";
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
          path: '/services',
          element: <Services/>
        },
        {
          path: '/blogs',
          element: <Blogs/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/checkout/:id',
          element: <PrivetRoute><CheckOut/></PrivetRoute>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/orders',
          element: <PrivetRoute><Orders/></PrivetRoute>
        }
        
      ]
    },
  ]);