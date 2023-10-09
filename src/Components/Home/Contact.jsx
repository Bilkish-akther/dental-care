import {CiLocationOn } from "react-icons/ci";
import {RiMoneyDollarCircleLine} from "react-icons/ri";

const Contact = () => {
    return (
        <div>
  

<section className="bg-[#07332F] mt-7">
  <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="text-white text-3xl">Contact With Us</p>
        <p className="text-white mt-5">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium <br /> totam rem aperiam, eaque ipsa quae ab illo inve ntore <br /> veritatis et quasi.</p>
        <p className='flex'><RiMoneyDollarCircleLine size={24} className=' gap-5'/> $15</p>
        <p className='flex'><CiLocationOn size={24} className=' gap-5'/>Dhanmondi, Dhaka, Bangladesh</p>

        
      </div>

      <div className="rounded-lg bg-[#07332F] p-8  lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
        

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" >Name</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" >Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email"
                type="tel"
                id="phone"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" >Mobail Number</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Mobail Number"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" >Doctor Name</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Doctor Name"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" >Date</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Date"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" >Time</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Time"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="mt-4">
          <button className="px-2 py-2 w-full text-white bg-[#F7A582]">Buy Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Contact;