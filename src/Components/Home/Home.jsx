import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Service from "../Home/Service";
import Card from "../Home/Card";
import Contact from "../Home/Contact";
import OurPatient from "../Home/OurPatient";
import ExpertDoctor from "../Home/ExpertDoctor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Card></Card>
            <OurPatient></OurPatient>
            <ExpertDoctor></ExpertDoctor>
            <Contact></Contact>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;

