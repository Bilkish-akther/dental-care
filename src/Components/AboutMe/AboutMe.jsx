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

                    <div className="flex gap-4">
                        <button className="mt-4 px-2 py-1 text-slate-500  border border-spacing-1 border-[#F7A582]">Appointment</button>
                        <button className="mt-4 px-2 py-1 text-slate-500  border border-spacing-1 border-[#F7A582]">Appointment</button>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center">
                <div className="tab tab-lg px-5  gap-48 ">
                    <a className="tab text-white  bg-[#F7A582]">Overview</a>
                    <a className="tab px-5">Locations</a>
                    <a className="tab px-5">Reviews</a>
                    <a className="tab px-5">Business Hours</a>
                </div>

            </div>
            <h1 className="ms-5 mt-4 text-black text-lg">About Me</h1>
            <p className="ms-5 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="mt-10 flex flex-col">
                <div className="hero-content flex-col lg:flex-row sm:right-0">
                    <div className='lg:w-1/2 relative'>
                        <p className="text-black text-2xl mt-10 font-bold">Education</p>
                        <p className="mt-2 text-black font-bold">American Dental Medical University</p>
                        <p>BDS</p>
                        <p>1998 - 2003</p>

                        <p className="mt-2 text-black font-bold">American Dental Medical University</p>
                        <p>MDS</p>
                        <p>2002-2005</p>


                        <p className="mt-2 text-black font-bold">Work & Experience</p>

                        <p className="mt-2 text-black font-bold">Glowing Smiles Family Dental Clinic</p>
                        <p>2010 - Present (5 years)</p>

                        <p className="mt-2 text-black font-bold">Comfort Care Dental Clinic</p>
                        <p className="mt-2 "> 2007 - 2010 (3 years)</p>

                        <p className="font-bold mt-2"> Dream Smile Dental Practice</p>
                        <p>2005 - 2007 (2 years)</p>

                        <h1 className="mt-5 text-black font-bold">Services</h1>
                        <ul>
                            <li>Tooth cleaning</li>
                            <li>Root Canal Therapy</li>
                            <li>Implants</li>
                            <li>Composite Bonding</li>
                            <li>Fissure Sealants</li>
                            <li>Surgical Extractions</li>
                        </ul>

                    </div>

                    <div className='lg:w-1/2'>
                        <p className="text-black text-2xl mt-5 font-bold">Awards</p>
                        <p>July 2019</p>
                        <h3 className="mt-2 text-black font-bold">Humanitarian Award</h3>
                        <p className="mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum Interdum et malesuada fames ac ante ipsum primis.</p>


                        <p className="mt-5">March 2011</p>
                        <h3 className="mt-2 text-black font-bold">Certificate for International Volunteer Service</h3>
                        <p className="mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum Interdum et malesuada fames ac ante ipsum primis.</p>


                        <p className="mt-2">March 2008</p>
                        <h3 className="mt-2 text-black font-bold">The Dental Professional of The Year Award</h3>
                        <p className="mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum Interdum et malesuada fames ac ante ipsum primis.</p>


                        <h2 className="mt-5 text-black font-bold">Specializations</h2>
                        <ul className="mt-2">
                            <li>Tooth cleaning</li>
                            <li>Root Canal Therapy</li>
                            <li>Implants</li>
                            <li>Composite Bonding</li>
                            <li>Fissure Sealants</li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
