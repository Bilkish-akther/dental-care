import { Link } from "react-router-dom";

import error from '../../assets/appointment/Frame.png'



const Error = () => {
    return (
        <main className="px-4 py-12 md:px-8 md:py-32 lg:px-48 h-screen">
            <section className=''>
              <h2 className="text-4xl font-bold text-black text-center">Sorry,</h2>
              <p className="text-center text-3xl">This page is not found.</p>
                <div className="text-center mt-5">
                   <img src={error} alt="" />
                   <Link to='/'>
                       <button className="bg-[#F7A582] text-white mt-5 py-2 px-10 text-center">Back to home</button>
                   </Link>
                </div>              
            </section>
        </main>
    );
};

export default Error;
