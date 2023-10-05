import { Outlet } from "react-router-dom";
import Navber from "../Home/Navber";
import Banner from "../Home/Banner";
import Service from "../Home/Service";
import Card from "../Home/Card";
import OurPatient from "../Home/OurPatient";
import ExpertDoctor from "../Home/ExpertDoctor";
import Footer from "../Home/Footer";
import Contact from "../Home/Contact";



const Main = () => {
    return (
        <div>
             <Navber></Navber>
             <Banner></Banner>
             <Service></Service>
             <Card></Card>
             <OurPatient></OurPatient>
             <ExpertDoctor></ExpertDoctor>
             <Contact></Contact>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;