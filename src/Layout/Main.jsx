import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
          <Header/>
          <Outlet/>  
        </div>
    );
};

export default Main;