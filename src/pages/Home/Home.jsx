import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Popular from "../../components/Popular";
import Services from "../../components/Services";
import Team from "../../components/Team";
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
           <Team/>
           <Footer/>
        </div>
    );
};

export default Home;