import React from "react";
import { FaFilm, FaHeart, FaUsers, FaGlobe, FaAward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Import your Header component

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Include the Header */}
      <Header />

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 pt-24">
        {" "}
        {/* Added pt-24 to account for header height */}
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-500/10 rounded-full">
              <FaFilm className="text-5xl text-amber-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            About MovieCollection
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your ultimate destination for discovering, tracking, and celebrating
            cinema
          </p>
        </div>
        {/* Rest of your About page content remains the same */}
        <div className="bg-gray-800 rounded-xl p-8 mb-16 border border-gray-700 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-amber-500">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4">
                Founded in 2023, MovieCollection began as a passion project by
                film enthusiasts who wanted to create a better way to organize
                and discover movies.
              </p>
              <p className="text-gray-300 mb-4">
                What started as a simple personal database has grown into a
                thriving community of movie lovers sharing their collections and
                recommendations.
              </p>
              <p className="text-gray-300">
                Today, we serve millions of users worldwide who trust us to help
                them track their viewing history, discover new films, and
                connect with fellow cinephiles.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Movie theater seats"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <FaUsers className="text-3xl text-amber-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">1M+</h3>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <FaFilm className="text-3xl text-amber-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">500K+</h3>
            <p className="text-gray-400">Movies Cataloged</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <FaHeart className="text-3xl text-amber-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">10M+</h3>
            <p className="text-gray-400">Ratings Submitted</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <FaGlobe className="text-3xl text-amber-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">150+</h3>
            <p className="text-gray-400">Countries</p>
          </div>
        </div>
        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-500">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                <FaFilm className="text-xl text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Celebrate Cinema
              </h3>
              <p className="text-gray-400">
                We believe every film tells a story worth preserving. Our
                platform helps honor the art of filmmaking and the joy of movie
                watching.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-xl text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Community First
              </h3>
              <p className="text-gray-400">
                MovieCollection is built by movie lovers, for movie lovers. We
                prioritize authentic connections and shared passion for film.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                <FaAward className="text-xl text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Quality Matters
              </h3>
              <p className="text-gray-400">
                From our database accuracy to our user experience, we're
                committed to excellence in every detail.
              </p>
            </div>
          </div>
        </div>
        {/* Team CTA */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-xl p-8 border border-amber-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Join Our Growing Community
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're a casual viewer or a hardcore cinephile,
            MovieCollection has something for everyone. Start building your
            personal movie library today.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
