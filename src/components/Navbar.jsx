import { IoReorderThreeOutline } from "react-icons/io5";
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-2 bg-white border border-gray-200 shadow-md flex items-center justify-between z-50">
      <div className="flex items-center ml-8">
        <img src={logo} alt="Logo" className="w-16" />
      </div>
      <div className="flex items-center mr-8">
        <IoReorderThreeOutline className="text-4xl cursor-pointer text-red-700" />
      </div>
    </nav>
  );
}

export default Navbar;
