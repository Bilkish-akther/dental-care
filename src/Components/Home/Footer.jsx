

const Footer = () => {
    return (
        <div className=" mt-8 bg-base-200">
            <footer className="footer p-10  text-base-content">
                <aside>
                    <a href="" className="flex items-center">

                        <img src="https://i.ibb.co/zmFKqSB/Group-1.png" className="h-8 mr-3 ms-2 bg-[#07332F]" alt="" />
                        <div className="flex gap-2">   <h3 className="text-lg text-[#F7A582]"> Dental</h3>
                            <p className="text-lg text-[#07332F]">Care</p></div>
                    </a>
                    <p className="mt-4">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. has been <br /> since the printer took.</p>
                    <button className="mt-4 px-2 py-2 text-[#F7A582]  border border-spacing-1 border-[#F7A582]">Appointment</button>
                </aside>
                <nav>
                    <header className=" text-black font-bold">Quick Links</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className=" text-black font-bold">Doc House Services</header>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Pediatric Clinic</a>

                </nav>
                <nav>
                    <header className=" text-black font-bold">Working Hours</header>
                    <a className="link link-hover">Monday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                </nav>
               
            </footer>
            <hr />
                <p className="text-center mt-5 text-base-content">Copyright © 2022 - All right reserved by Doc House Ltd</p>
        </div>
    );
};

export default Footer;
