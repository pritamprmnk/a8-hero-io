import React from 'react'
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div>
       <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">

      <div className="flex items-center space-x-2">
        <img
          src="/assets/logo.png"
          alt="Hero.io Logo"
          className="h-8 w-8"
        />
        <span className="font-semibold text-lg text-purple-600">HERO.IO</span>
      </div>


      <div className="flex space-x-6">
        <a
          href="/"
          className="text-purple-600 font-medium border-b-2 border-purple-600"
        >
          Home
        </a>
        <a href="/" className="text-black hover:text-purple-600 transition">
          Apps
        </a>
        <a href="" className="text-black hover:text-purple-600 transition">
          Installation
        </a>
      </div>

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
