import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaFilm,
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaQuestionCircle,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const Navigate = useNavigate();
  const location = useLocation();
  const [genre, setGenre] = useState();

  useEffect(() => {
    axios
      .get("http://moviesapi.ir/api/v1/genres")
      .then((res) => setGenre(res.data));
  }, []);

  console.log(genre);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaFilm className="text-3xl text-amber-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            MovieCollection
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => Navigate("/")}
            className={` ${
              location.pathname == "/" && "bg-amber-600"
            }  px-4 py-2 text-gray-300 hover:text-white  text-sm font-medium rounded-md hover:bg-gray-800 transition-colors`}
          >
            Home
          </button>

          {/* Genre Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 text-gray-300 hover:text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center gap-1">
              <span>Genre</span>
              <FaChevronDown className="text-xs mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute left-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block z-50">
              {genre &&
                genre.map((item) => (
                  <a
                    onClick={() => Navigate(`/${item.name}/${item.id}`)}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
            </div>
          </div>

          {/* About Button */}
          <button
            onClick={() => Navigate("/About")}
            className={`${
              location.pathname == "/About" && "bg-amber-600"
            } px-4 py-2 text-gray-300 hover:text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors`}
          >
            About
          </button>

          {/* Help Button */}
          <button
            onClick={() => Navigate("/Contact")}
            className={`${
              location.pathname == "/Contact" && "bg-amber-600"
            } px-4 py-2 text-gray-300 hover:text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center gap-1`}
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => Navigate("/Login")}
            className="px-4 py-2 text-gray-300 hover:text-white text-sm font-medium"
          >
            Login
          </button>
          <button
            onClick={() => Navigate("/Signin")}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md text-sm font-medium"
          >
            Sign in
          </button>
          <button className="p-2.5 bg-gray-800 hover:bg-gray-700 rounded-full relative">
            <FaBell className="text-gray-400" />
            <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-amber-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-full pl-2 pr-3 py-1.5 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
              <FaUserCircle className="text-white text-xl" />
            </div>
            <span className="text-gray-300 text-sm hidden md:inline">
              Profile
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
