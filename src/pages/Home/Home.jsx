import Banner from "../../components/Banner";
import Services from "../../components/Services";
import Footer from "../../shared/Footer/Footer";
import About from "../About";


const Home = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <Services/>
           <Footer/>
        </div>
    );
};

export default Home;