import Search from "./navbar/Search";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="h-header bg-header fixed top-0 left-0 z-50 w-full text-white">
      <div className=" grid-cols-header-3 min-w-[400px] w-[95%] h-full grid  mx-auto">
        <div className="left-content flex">
          <div className="logo md:flex md:items-center md:justify-center hidden">
            <h1 className="text-xl font-bold">ShoeJam</h1>
          </div>
          <button className="hamburger-icon md:hidden bg-none flex items-center justify-center px-3 border border-blue-500 border-none shadow-none outline-none">
            <span>
              <GiHamburgerMenu className="w-6 h-6" />
            </span>
          </button>
        </div>
        <div className="-red-500 flex items-center justify-center p-2">
          <Search />
        </div>
        <div className="right-content flex items-center justify-end space-x-3">
          <span>
            <IoMdNotificationsOutline />
          </span>
          <div className="w-10 h-10 bg-white rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
