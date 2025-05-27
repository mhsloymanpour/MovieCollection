import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  FaSearch,
} from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Genre() {
  const { id, genre } = useParams();
  const [genreData, setGenreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const url = `http://moviesapi.ir/api/v1/genres/${id}/movies?page=${page}`;

  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setGenreData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenreMovies();
  }, [url]);

  const toggleFavorite = (movieId) => {
    setFavorites((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  const filteredMovies =
    genreData?.data?.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="flex flex-col items-center">
          <FaSpinner className="animate-spin text-4xl text-amber-500 mb-4" />
          <span className="text-gray-300">Loading movies in this genre...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md text-center">
          <div className="text-5xl mb-4">🎭</div>
          <h2 className="text-2xl font-bold text-red-400 mb-2">Genre Error</h2>
          <p className="text-gray-300 mb-6">
            Couldn't load movies for this genre: {error}
          </p>
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
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <GiFilmStrip className="text-amber-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                {genre} Movies
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore our collection of {genre} movies
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search ${id} movies...`}
                className="w-full bg-gray-800 border border-gray-700 rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
            </div>
          </div>

          {filteredMovies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-7xl mb-6 text-amber-500">🎥</div>
              <h2 className="text-3xl font-semibold mb-2">No movies found</h2>
              <p className="text-lg text-gray-400 mb-6">
                Try a different search term
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="btn bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full shadow-lg"
              >
                Show All {id} Movies
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {filteredMovies.map((movie) => (
                  <div
                    key={movie.id}
                    className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Movie Poster */}
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/300x450/1a1a1a/cccccc?text=No+Poster";
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(movie.id);
                          }}
                          className="p-2 bg-gray-900 bg-opacity-70 rounded-full hover:bg-amber-600 transition-colors"
                        >
                          {favorites.includes(movie.id) ? (
                            <FaHeart className="text-red-500" />
                          ) : (
                            <FaRegHeart className="text-white" />
                          )}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWatchlist(movie.id);
                          }}
                          className="p-2 bg-gray-900 bg-opacity-70 rounded-full hover:bg-amber-600 transition-colors"
                        >
                          {watchlist.includes(movie.id) ? (
                            <FaBookmark className="text-amber-400" />
                          ) : (
                            <FaRegBookmark className="text-white" />
                          )}
                        </button>
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <FaStar className="mr-1" />
                        {movie.imdb_rating}
                      </div>

                      {/* Title & Info */}
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h2 className="text-xl font-bold text-white mb-1 drop-shadow-lg line-clamp-1">
                          {movie.title}
                        </h2>
                        <div className="flex justify-between text-sm">
                          <span className="flex items-center text-gray-300">
                            <FaCalendarAlt className="mr-1 text-amber-500" />
                            {movie.year}
                          </span>
                          <span className="flex items-center text-gray-300">
                            <FaGlobeAmericas className="mr-1 text-amber-500" />
                            {movie.country}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {movie.genres.slice(0, 3).map((genre, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-700 text-amber-400 px-2 py-1 rounded-full"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                      <button
                        className="w-full btn bg-amber-600 hover:bg-amber-700 text-white rounded-full py-2 flex items-center justify-center"
                        onClick={() => navigate(`/movie/${movie.id}`)}
                      >
                        <FaPlay className="mr-2" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {genreData?.metadata && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className={`px-5 py-2 rounded-full ${
                        page <= 1
                          ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                          : "bg-amber-600 hover:bg-amber-700 text-white"
                      }`}
                      disabled={page <= 1}
                    >
                      <AiFillCaretLeft />
                    </button>
                    <span className="px-5 py-2 bg-gray-800 rounded-full">
                      Page: {page} of {genreData.metadata.page_count}
                    </span>
                    <button
                      onClick={() => setPage(page + 1)}
                      className={`px-5 py-2 rounded-full ${
                        page >= genreData.metadata.page_count
                          ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                          : "bg-amber-600 hover:bg-amber-700 text-white"
                      }`}
                      disabled={page >= genreData.metadata.page_count}
                    >
                      <AiFillCaretRight />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Genre;
