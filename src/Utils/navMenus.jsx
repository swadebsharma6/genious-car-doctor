import { NavLink } from "react-router-dom"

 const navMenus = <>
  <li>
  <NavLink to="/"
  className={({ isActive,}) =>
     isActive ? " font-semibold text-orange-500" : ""
  }>
  Home
</NavLink>
  </li>
  <li>
  <NavLink to="/about"
  className={({ isActive,}) =>
     isActive ? "font-semibold text-orange-500" : ""
  }>
  About
</NavLink>
  </li>
  <li>
  <NavLink to="/services"
  className={({ isActive,}) =>
     isActive ? "font-semibold text-orange-500" : ""
  }>
 Services
</NavLink>
  </li>
  <li>
  <NavLink to="/blogs"
  className={({ isActive,}) =>
     isActive ? "font-semibold text-orange-500" : ""
  }>
 Blogs
</NavLink>
  </li>
  <li>
  <NavLink to="/contact"
  className={({ isActive,}) =>
     isActive ? "font-semibold text-orange-500" : ""
  }>
 Contact
</NavLink>
  </li>
  
  </>

  export { navMenus }

