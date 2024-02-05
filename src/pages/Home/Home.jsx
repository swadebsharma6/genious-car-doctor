import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Popular from "../../components/Popular";
import Services from "../../components/Services";
import Team from "../../components/Team";
import Footer from "../../shared/Footer/Footer";
import About from "../About";
import Features from "./Home/Features";
import Testimonial from "./Home/Testimonial";


const Home = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <Services/>
           <Contact/>
           <Popular/>
           <Team/>
           <Features/>
           <Testimonial/>
           <Footer/>
        </div>
    );
};

export default Home;