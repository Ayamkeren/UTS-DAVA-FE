import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGOrevisi.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full  bg-gray-300">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img
            src={logo}
            alt=""
            className="w-20 hover:scale-105 transition-all"
          />
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-black hover:text-white rounded-xl transition-all cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 hover:bg-black hover:text-white rounded-xl transition-all cursor-pointer">
            <Link to="/fish">Fish</Link>
          </li>
          <li className="p-3 hover:bg-black hover:text-white rounded-xl transition-all cursor-pointer">
            <Link to="/transaction">Transaction</Link>
          </li>
          <li className="p-3 hover:bg-black hover:text-white rounded-xl transition-all cursor-pointer">
            <Link to="/customer">Customer</Link>
          </li>
          <li className="p-3 hover:bg-black hover:text-white rounded-xl transition-all cursor-pointer">
            Review
          </li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3">
          <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
          <input
            type="text"
            placeholder="search..."
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-black"
          />
        </div>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
            Fish
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
            Transaction
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
            Customer
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
            Review
          </li>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
