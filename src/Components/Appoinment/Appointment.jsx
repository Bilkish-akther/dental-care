import './Appointment.css';
import img12 from '../../assets/appointment/chair 1.png'
import img13 from '../../assets/appointment/Calender.png'

const Appointment = () => {
    return (
        <div>
            <div className='appcontainer'>
                <div className='justify-center  flex  gap-16 '>
                    <img className='lg:w-3/12 mt-44 mb-10' src={img13} alt="" />
                    <img className='lg:w-5/12 mt-44 mb-10' src={img12} alt="" />

                </div>
                <div className='text-center '>
                    <p className='text-[#F7A582]'>Available Services on April 30, 2022</p>
                    <p className='text-3xl text-black font-bold pb-5'>Please select a service.</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row  justify-center gap-10 mt-10 '>
                <div className='flex w-80  bg-base-100 shadow-xl p-5 gap-8'>
                    <img src="https://i.ibb.co/rQGDyDM/006-broken-tooth.png" alt="" />
                    <p className='text-xl font-bold'>Teeth <br /> Orthodontics</p>
                </div>
                <div className='flex w-80  bg-base-100 shadow-xl p-5 gap-8'>
                    <img src="https://i.ibb.co/bBz7J7c/Flat.png" alt="" />
                    <p className='text-xl font-bold'>Cosmetic <br /> Dentisty</p>
                </div>
                <div className='flex w-80  bg-base-100 shadow-xl p-5 gap-8'>
                    <img src="https://i.ibb.co/GH89gNx/Group-1.png" alt="" />
                    <p className='text-xl font-bold'>Teeth <br /> Cleaning</p>
                </div>

            </div>

            <div className='flex flex-col lg:flex-row  justify-center gap-10 mt-10 '>
                <div className='flex w-80  bg-base-100 shadow-xl p-5 gap-8'>
                    <img src="https://i.ibb.co/VNDwmvp/Group.png" alt="" />
                    <p className='text-xl font-bold'>Cavity <br /> Protection</p>
                </div>
                <div className='flex w-80  bg-base-100 shadow-xl p-5 gap-8'>
                    <img src="https://i.ibb.co/hHwYyVG/Group-34967.png" alt="" />
                    <p className='text-xl font-bold'>Pediatric <br /> Dental</p>
                </div>
                <div className='flex w-80  bg-base-100 shadow-xl p-5 gap-8'>
                    <img src="https://i.ibb.co/VNDwmvp/Group.png" alt="" />
                    <p className='text-xl font-bold'>Oral <br /> Surgery</p>
                </div>
            </div>



            <div className='mt-16'>
                <h2 className='text-center text-3xl font-bold text-black mt-10'>Available slots for Teeth Orthodontics.</h2>
                <div className='flex flex-col lg:flex-row  gap-20'>
                    <div className='mt-5 flex'>
                        <div className=" w-72 bg-base-100 shadow-xl">
                            <div className="appImg ms-24 bg-[#01D0FB]">
                                <img className="rounded-sm ms-5 pt-4" src="https://i.ibb.co/7CyMnFW/004-dental.png" alt="" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Teeth Orthodontics</h2>
                                <p>8:00 AM - 9:00 AM</p>
                                <button className="px-2 py-2 text-white bg-[#F7A582]">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className=" w-72 bg-base-100 shadow-xl">
                            <div className="appImg ms-24 bg-[#fceaeb]">
                                <img className="rounded-sm ms-5 pt-4" src="https://i.ibb.co/fGXK3yQ/Group-34976.png" alt="" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Teeth Orthodontics</h2>
                                <p>8:00 AM - 9:00 AM</p>
                                <button className="px-2 py-2 text-white bg-[#F7A582]">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className=" w-72 bg-base-100 shadow-xl">
                            <div className="appImg ms-24 bg-[#fceaeb]">
                                <img className="rounded-sm ms-5 pt-4" src="https://i.ibb.co/ynMShTH/Group-34975.png" alt="" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Teeth Orthodontics</h2>
                                <p>8:00 AM - 9:00 AM</p>
                                <button className="px-2 py-2 text-white bg-[#F7A582]">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row  gap-20'>
                    <div className='mt-5 flex'>
                        <div className=" w-72 bg-base-100 shadow-xl">
                            <div className="appImg ms-24 bg-[#f6bdc0]">
                                <img className="rounded-sm ms-5 pt-4" src="https://i.ibb.co/DL4TnFS/002-decayed.png" alt="" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Teeth Orthodontics</h2>
                                <p>8:00 AM - 9:00 AM</p>
                                <button className="px-2 py-2 text-white bg-[#F7A582]">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className=" w-72 bg-base-100 shadow-xl">
                            <div className="appImg ms-24 bg-[#fceaeb]">
                                <img className="rounded-sm ms-5 pt-4" src="https://i.ibb.co/HBwDJd5/Group-34973.png" alt="" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Teeth Orthodontics</h2>
                                <p>8:00 AM - 9:00 AM</p>
                                <button className="px-2 py-2 text-white bg-[#F7A582]">Book Appointment</button>
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    );
};

export default Appointment;