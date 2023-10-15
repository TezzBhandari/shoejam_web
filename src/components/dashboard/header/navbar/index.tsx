import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header>
      <div>
        <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Your Logo</div>
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
          <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
            &#9776;
          </div>
        </div>

        <div
          className={`bg-gray-900 text-white p-4 fixed top-0 left-0 h-full w-64 overflow-y-auto transition-transform duration-300 ${
            isSidebarOpen
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
          <a href="#" className="block py-2 hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Product
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Category
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Logout
          </a>
        </div>
      </div>
      {/* <Disclosure as={"nav"}>
        <Disclosure.Button className="absolute top-4 left-4 ">
          <div className="p-2 bg-">
            <GiHamburgerMenu className="block md:hidden h-6 w-6" />
          </div>
        </Disclosure.Button>

        <div className="sidebar p-6 w-1/2 h-screen bg-white"></div>
      </Disclosure> */}
    </header>
  );
};

export default Navbar;
