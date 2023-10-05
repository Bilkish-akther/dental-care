import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineWifiCalling3} from 'react-icons/md';
import { Tb24Hours} from 'react-icons/tb';

const Card = () => {
    return (
        <div className="mt-5 flex flex-col lg:flex-row gap-6">
            <div className="card w-96 bg-[#07332F] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-white"><Tb24Hours/>Opening Hours</h2>
                    <p className="text-white">Open 9.00 am to 5.00pm Everyday</p>

                </div>
            </div>
            <div className="card w-96 bg-[#F7A582]  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-white"><CiLocationOn/>Our Locations</h2>
                    <p className="text-white">Dhanmondi 17, Dhaka -1200, Bangladesh</p>

                </div>
            </div>
            <div className="card w-96 bg-[#07332F]  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-white"><MdOutlineWifiCalling3/>Contact Us</h2>
                    <p className="text-white">+88 01750 00 00 00 <br />
                        +88 01750 00 00 00</p>

                </div>
            </div>
        </div>
    );
};

export default Card;