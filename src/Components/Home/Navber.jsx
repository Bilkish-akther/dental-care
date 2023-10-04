

const Navber = () => {
  return (
    <div>

      <nav className="  bg-[#07332F]  text-white ">
        <div className="max-w-screen-lg flex    mx-auto ">
          <img className="w-24 h-28" src="https://i.ibb.co/FVNtJFK/Vector.png" alt="" />
          <a href="" className="flex items-center">

            <img src="https://i.ibb.co/zmFKqSB/Group-1.png" className="h-8 mr-3 ms-2" alt="" />
            <h3 className="text-lg flex gap-1"> <span className="text-[#F7A582]">Dental</span> Care</h3>
          </a>

          <div className="text-right mx-96 mt-8   hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className=" flex flex-col font-medium p-4 md:p-0   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">

              <li>
                <a href="#" className="mt-5 block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 mt-5  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 mt-5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Appointment</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 mt-5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navber;