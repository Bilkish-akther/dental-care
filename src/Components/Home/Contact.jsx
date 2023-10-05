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

      <div className="rounded-lg bg-white p-8  lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" >Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" >Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" >Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="peer sr-only"
                id="option1"
                type="radio"
                
                name="option"
              />

              <label
               
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                
              >
                <span className="text-sm"> Option 1 </span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option2"
                type="radio"
              
                name="option"
              />

              <label
                
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                
              >
                <span className="text-sm"> Option 2 </span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option3"
                type="radio"
               
                name="option"
              />

              <label
                
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
               
              >
                <span className="text-sm"> Option 3 </span>
              </label>
            </div>
          </div>

          <div>
            <label className="sr-only">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
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