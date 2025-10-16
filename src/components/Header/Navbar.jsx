import { useState } from "react";
import { NavLink } from "react-router-dom";
import { House, LayoutGrid, FileDown, Github, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">


      <a href="/" className="flex items-center space-x-2">
        <img src="/assets/logo.png" alt="Hero.io Logo" className="h-8 w-8" />
        <span className="font-semibold text-lg text-purple-600">HERO.IO</span>
      </a>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center font-medium transition pb-1 ${
              isActive
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-black hover:text-purple-600"
            }`
          }
        >
          <House size={16} strokeWidth={1.25} className="mr-1" />
          Home
        </NavLink>

        <NavLink
          to="/allapps"
          className={({ isActive }) =>
            `flex items-center font-medium transition pb-1 ${
              isActive
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-black hover:text-purple-600"
            }`
          }
        >
          <LayoutGrid size={16} strokeWidth={1.25} className="mr-1" />
          Apps
        </NavLink>

        <NavLink
          to="/installations"
          className={({ isActive }) =>
            `flex items-center font-medium transition pb-1 ${
              isActive
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-black hover:text-purple-600"
            }`
          }
        >
          <FileDown size={16} strokeWidth={1.25} className="mr-1" />
          Installation
        </NavLink>
      </div>



      {/* Side button */}
      <div className="hidden md:block">
        <button
          onClick={() =>
            window.open("https://github.com/pritamprmnk", "_blank")
          }
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          <Github />
          <span>Contribute</span>
        </button>
      </div>


      {/* Toggle button */}
      <button
        className="md:hidden text-purple-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
 

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col space-y-4 mt-4 w-full md:hidden">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center font-medium transition pb-1 ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-black hover:text-purple-600"
              }`
            }
          >
            <House size={16} strokeWidth={1.25} className="mr-1" />
            Home
          </NavLink>

          <NavLink
            to="/allapps"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center font-medium transition pb-1 ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-black hover:text-purple-600"
              }`
            }
          >
            <LayoutGrid size={16} strokeWidth={1.25} className="mr-1" />
            Apps
          </NavLink>

          <NavLink
            to="/installation"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center font-medium transition pb-1 ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-black hover:text-purple-600"
              }`
            }
          >
            <FileDown size={16} strokeWidth={1.25} className="mr-1" />
            Installation
          </NavLink>

          <button
            onClick={() =>
              window.open("https://github.com/pritamprmnk", "_blank")
            }
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            <Github />
            <span>Contribute</span>
          </button>
        </div>
      )}
    </nav>
  );
}
