import React from "react";
import { FaSearch, FaFilm, FaBell, FaUserCircle } from "react-icons/fa";

function Header({ searchQuery, setSearchQuery }) {
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

        {/* Search */}
        <div className="relative flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full bg-gray-800 border border-gray-700 rounded-full py-2.5 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-3 text-gray-500" />
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-3">
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
