import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  FaStar,
  FaCalendarAlt,
  FaGlobeAmericas,
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaPlay,
  FaSpinner,
  FaArrowLeft,
} from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const url = `http://moviesapi.ir/api/v1/movies/${id}`;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setMovie(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [url]);

  const toggleFavorite = () => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((movieId) => movieId !== id)
        : [...prev, id]
    );
  };

  const toggleWatchlist = () => {
    setWatchlist((prev) =>
      prev.includes(id)
        ? prev.filter((movieId) => movieId !== id)
        : [...prev, id]
    );
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="flex flex-col items-center">
          <FaSpinner className="animate-spin text-4xl text-amber-500 mb-4" />
          <span className="text-gray-300">Loading movie details...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md text-center">
          <div className="text-5xl mb-4">🎭</div>
          <h2 className="text-2xl font-bold text-red-400 mb-2">Movie Error</h2>
          <p className="text-gray-300 mb-6">Couldn't load the movie: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full"
          >
            Retry
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header />

      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-500 mb-6 hover:text-amber-400 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Movies
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Movie Poster */}
            <div className="lg:w-1/3">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x450/1a1a1a/cccccc?text=No+Poster";
                  }}
                />
                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={toggleFavorite}
                    className="p-2 bg-gray-900 bg-opacity-70 rounded-full hover:bg-amber-600 transition-colors"
                  >
                    {favorites.includes(id) ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart className="text-white" />
                    )}
                  </button>
                  <button
                    onClick={toggleWatchlist}
                    className="p-2 bg-gray-900 bg-opacity-70 rounded-full hover:bg-amber-600 transition-colors"
                  >
                    {watchlist.includes(id) ? (
                      <FaBookmark className="text-amber-400" />
                    ) : (
                      <FaRegBookmark className="text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Movie Details */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold mb-2 text-white">
                {movie.title}{" "}
                <span className="text-amber-500">({movie.year})</span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  <FaStar className="mr-1" />
                  {movie.imdb_rating} IMDb
                </div>
                <div className="flex items-center text-gray-300">
                  <FaCalendarAlt className="mr-2 text-amber-500" />
                  {movie.released}
                </div>
                <div className="flex items-center text-gray-300">
                  <FaGlobeAmericas className="mr-2 text-amber-500" />
                  {movie.country}
                </div>
                <div className="text-gray-300">{movie.runtime}</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-800 text-amber-400 px-3 py-1 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2 text-white">Plot</h2>
                <p className="text-gray-300 leading-relaxed">{movie.plot}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Director
                  </h3>
                  <p className="text-gray-300">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Writer
                  </h3>
                  <p className="text-gray-300">{movie.writer}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Actors
                  </h3>
                  <p className="text-gray-300">{movie.actors}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Awards
                  </h3>
                  <p className="text-gray-300">{movie.awards}</p>
                </div>
              </div>

              {/* Screenshots */}
              {movie.images && movie.images.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Screenshots
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {movie.images.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${movie.title} screenshot ${index + 1}`}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Movie;
