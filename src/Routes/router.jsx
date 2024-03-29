import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import CheckOut from "../pages/CheckOut/CheckOut";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
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
      errorElement: <ErrorPage/>,
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
          element: <Services/>,
          loader: () => fetch('https://genius-car-server-sooty.vercel.app/services')
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
          loader:({params}) => fetch(`https://genius-car-server-sooty.vercel.app/services/${params.id}`)
        },
        {
          path: '/orders',
          element: <PrivetRoute><Orders/></PrivetRoute>
        }
        
      ]
    },
  ]);