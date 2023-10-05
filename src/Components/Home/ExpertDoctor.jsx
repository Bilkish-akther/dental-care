import expert1 from '../../assets/expert1.png'
import expert2 from '../../assets/expert2.png'
import expert3 from '../../assets/expert3.png'
import { AiFillStar } from "react-icons/ai";
import {CiLocationOn } from "react-icons/ci";
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import {CgCalendarDates} from "react-icons/cg";

const ExpertDoctor = () => {
    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-center text-4xl font-semibold">Our Expert Doctors</h2>
                <p className="mt-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className=" flex flex-col lg:flex-row gap-6 mt-8">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={expert1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Karyen Anderson</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex text-[#F7A582]'>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        </div>
                        <p className='flex'><CiLocationOn size={24} className=' gap-5'/> Dhanmondi, Dhaka, Bangladesh</p>
                        <p className='flex'><CgCalendarDates size={24} className=' gap-5'/>Available On Mon, 22 December</p>
                        <p className='flex'><RiMoneyDollarCircleLine size={24} className=' gap-5'/> $15</p>

                        <button className="px-2 py-2 text-[#F7A582]  border border-spacing-1 border-[#F7A582]">View Profile</button>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={expert2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Arryyan Butto</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex text-[#F7A582]'>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        </div>
                        <p className='flex'><CiLocationOn size={24} className=' gap-5'/>Dhanmondi, Dhaka, Bangladesh</p>
                        <p className='flex'><CgCalendarDates size={24} className=' gap-5'/>Available On Mon, 22 December</p>
                        <p className='flex'><RiMoneyDollarCircleLine size={24} className=' gap-5'/> $15</p>

                        <button className="px-2 py-2 text-white bg-[#F7A582]">View Profile</button>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={expert3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Layma Acharjo</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex text-[#F7A582]'>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        </div>
                        <p className='flex'><CiLocationOn size={24} className=' gap-5'/>Dhanmondi, Dhaka, Bangladesh</p>
                        <p className='flex'><CgCalendarDates size={24} className=' gap-5'/>Available On Mon, 22 December</p>
                        <p className='flex'><RiMoneyDollarCircleLine size={24} className=' gap-5'/> $15</p>

                        <button className="px-2 py-2 text-[#F7A582]  border border-spacing-1 border-[#F7A582]">View Profile</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctor;

