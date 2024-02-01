import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Popular from "../../components/Popular";
import Services from "../../components/Services";
import Footer from "../../shared/Footer/Footer";
import About from "../About";


const Home = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <Services/>
           <Contact/>
           <Popular/>
           <Footer/>
        </div>
    );
};

export default Home;