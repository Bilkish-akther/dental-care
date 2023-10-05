import img1 from '../../assets/Rectangle 1.png';
import img2 from '../../assets/Rectangle 2.png';
import img3 from '../../assets/Rectangle 3.png';


const Banner = () => {
    return (
        <div className="bg-[#07332F]">

            <div className="hero max-w-screen-lg p-24">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className='lg:w-1/2  p-4'>
                        <div>
                            <h3 className="text-5xl text-white font-bold">Your Best Medical <br /> Help Center</h3>
                            <p className=" text-white mt-5">Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry stardard.</p>
                            <button className=" bg-[#F7A582] px-4 py-2 mt-5 text-white">All Service</button>
                        </div>
                    </div>

                    <div className='lg:w-1/2 relative '>
                        <div className='flex'>
                            <img src={img3} className="w-3/4 rounded-lg shadow-2xl" />
                            <img src={img1} className="w-3/4 rounded-lg shadow-2xl mt-11" />

                        </div>
                        <div className='flex'>
                            <img src="https://i.ibb.co/fMPv53f/Group-7.png" className='w-20 h-20 p-8' alt="" />
                            <img src="https://i.ibb.co/3hjJ39N/Group-6.png" className='w-14 h-20 mt-28' alt="" />
                            <img src="https://i.ibb.co/DzW8D99/Group-34830.png" className='w-20 h-20' alt="" />
                            <img src={img2} className="w-1/2 absolute top-1/2 rounded-lg left-28 " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;