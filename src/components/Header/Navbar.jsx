import React from 'react'
import { Github, House, FileDown,LayoutGrid } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       <nav className="flex items-center justify-between px-2 py-4 bg-white shadow-sm">

<a href="/">
        <div className="flex items-center space-x-2">
        <img
          src="/assets/logo.png"
          alt="Hero.io Logo"
          className="h-8 w-8"
        />
        <span className="font-semibold text-lg text-purple-600">HERO.IO</span>
      </div>
</a>


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

      {/* All Apps */}
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

      {/* Installation */}
      <NavLink
        to="/installation"
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
      <button onClick={() => window.open("https://github.com/pritamprmnk", "_blank")}
      className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
        <Github />
        <span>Contribute</span>
      </button>
    </nav>
    </div>
  )
}

export default Navbar
