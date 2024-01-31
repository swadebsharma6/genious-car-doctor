import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer p-24 px-10 bg-black text-white">
  <aside>
    <img src={logo} alt=""  width={70} />
    <p>Edwin Diaz is a software and web technologies 
    <br />engineer, a life coach trainer who is also a serial .</p>
  </aside> 
  <nav>
    <h6 className="text-2xl font-medium">Services</h6> 
    <Link className="link link-hover">Branding</Link>
    <Link className="link link-hover">Design</Link>
    <Link className="link link-hover">Marketing</Link>
    <Link className="link link-hover">Advertisement</Link>
  </nav> 
  <nav>
    <h6 className="text-2xl font-medium">Company</h6> 
    <Link className="link link-hover">About us</Link>
    <Link className="link link-hover">Contact</Link>
    <Link className="link link-hover">Jobs</Link>
    <Link className="link link-hover">Press kit</Link>
  </nav> 
  <nav>
    <h6 className="text-2xl font-medium">Legal</h6> 
    <Link className="link link-hover">Terms of use</Link>
    <Link className="link link-hover">Privacy policy</Link>
    <Link className="link link-hover">Cookie policy</Link>
  </nav>
</footer>
    );
};

export default Footer;