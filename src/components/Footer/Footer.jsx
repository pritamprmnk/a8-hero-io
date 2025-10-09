import React from 'react'
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#011A33] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">

        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo.png"
            alt="HERO.IO Logo"
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg tracking-wide">HERO.IO</span>
        </div>


        <div className="flex flex-col items-center mt-6 md:mt-0">
          <span className="text-sm mb-2">Social Links</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter  />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook />
            </a>
          </div>
        </div>
      </div>


      <div className="text-center mt-6 text-sm text-gray-300">
        Copyright © 2025 - All rights reserved
      </div>
    </footer>
    </div>
  )
}

export default Footer