import { AiFillStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const AboutMe = () => {
    return (
        <div className="mt-10">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="p-5" src="https://i.ibb.co/hc3CnNs/expert3.png" alt="Movie" /></figure>
                <div className="mt-10">
                    <h2 className="card-title mt-3">Dr. Ruby Perrin</h2>
                    <p>MBBS, MD - General Medicine</p>
                    <div className="flex mt-3">
                        <div className='flex text-[#F7A582] '>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        </div>
                        <AiFillStar />
                    </div>
                    <p className='flex mt-2'><CiLocationOn size={24} className=' gap-5' /> Dhanmondi, Dhaka, Bangladesh. <span className="text-[#F7A582] ps-3"> Get Directions</span></p>

                    <div className="flex gap-2">
                        <img src="../../assets/Rectangle icon.png" alt="" />
                        <img src="../../assets/Rectangle icon.png" alt="" />
                        <img src="../../assets/Rectangle icon.png" alt="" />
                        <img src="../../assets/Rectangle icon.png" alt="" />
                        <img src="../../assets/Rectangle icon.png" alt="" />
                      

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
