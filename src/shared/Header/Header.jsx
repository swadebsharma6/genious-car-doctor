import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { navMenus } from "../../Utils/navMenus";
import logo from '../../assets/logo.svg';



const Header = () => {
    return (
        <nav className="navbar bg-base-100 my-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
       {navMenus}
      </ul>
    </div>
    <Link to='/'>
    <img src={logo} alt="Logo" width={60} />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
    {navMenus}
    </ul>
  </div>
  <div className="navbar-end">

  <div className="flex items-center gap-x-3">
  <FaBagShopping />
  <FaSearch />
  </div>
 <Link to='/login'>
 <button className="btn btn-sm btn-outline ms-4 btn-error">Appointment</button>
 </Link>
  </div>
</nav>
    );
};

export default Header;
