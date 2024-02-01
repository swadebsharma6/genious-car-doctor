import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";

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
        
      ]
    },
  ]);