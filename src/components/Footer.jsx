import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFilm,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const Navigate = useNavigate();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaFilm className="text-3xl text-amber-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                CineVerse
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your premium destination for discovering and exploring movies from
              around the world.
            </p>
            <div className="flex gap-4">
              {[FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 bg-gray-800 hover:bg-amber-600 rounded-full transition-colors"
                  >
                    <Icon className="text-gray-400 hover:text-white" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-500">Explore</h3>
            <ul className="space-y-3">
              {[
                "Popular Movies",
                "Top Rated",
                "Upcoming",
                "Now Playing",
                "Trending",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-500">Genres</h3>
            <ul className="space-y-3">
              <li
                className="cursor-pointer text-gray-400 hover:text-amber-400 transition-colors"
                onClick={() => Navigate("/Action")}
              >
                Action
              </li>
              <li
                className="cursor-pointer text-gray-400 hover:text-amber-400 transition-colors"
                onClick={() => Navigate("/Comedy")}
              >
                Comedy
              </li>
              <li
                className="cursor-pointer text-gray-400 hover:text-amber-400 transition-colors"
                onClick={() => Navigate("/Drama")}
              >
                Drama
              </li>
              <li
                className="cursor-pointer text-gray-400 hover:text-amber-400 transition-colors"
                onClick={() => Navigate("/Scary")}
              >
                Scary
              </li>
              <li
                className="cursor-pointer text-gray-400 hover:text-amber-400 transition-colors"
                onClick={() => Navigate("/Fictional")}
              >
                Fictional
              </li>
            </ul>
            {/* <ul className="space-y-3">
              {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-500">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Contact", "Careers", "Press", "API"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2025 CineVerse. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            {["Terms", "Privacy", "Cookies", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
