import { Outlet } from "react-router-dom";
import Navber from "../Home/Navber";
import Banner from "../Home/Banner";
import Service from "../Home/Service";



const Main = () => {
    return (
        <div>
             <Navber></Navber>
             <Banner></Banner>
             <Service></Service>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;