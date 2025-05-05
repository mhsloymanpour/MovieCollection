import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar, FaCalendarAlt, FaGlobeAmericas, FaTimes, FaAward, FaClock, FaUserTie, FaPenAlt, FaUsers, FaFilm } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'

function App() {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [movieDetails, setMovieDetails] = useState(null)
  const [detailsLoading, setDetailsLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://moviesapi.ir/api/v1/movies?page=1")
        setMovies(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchMovies()
  }, [])

  const fetchMovieDetails = async (movieId) => {
    setDetailsLoading(true)
    try {
      const response = await axios.get(`https://moviesapi.ir/api/v1/movies/${movieId}`)
      setMovieDetails(response.data)
      setSelectedMovie(movieId)
    } catch (err) {
      setError(err.message)
    } finally {
      setDetailsLoading(false)
    }
  }

  const closeModal = () => {
    setSelectedMovie(null)
    setMovieDetails(null)
  }

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  )

  if (error) return (
    <div className="alert alert-error max-w-md mx-auto mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Error fetching movies: {error}</span>
    </div>
  )

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <GiFilmStrip className="text-primary" /> Movie Collection
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies && movies.data.map((movie) => (
            <div key={movie.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="w-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster'
                  }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                
                <div className="flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <span>{movie.imdb_rating}/10</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {movie.genres.map((genre, index) => (
                    <span key={index} className="badge badge-outline">{genre}</span>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaGlobeAmericas />
                    <span>{movie.country}</span>
                  </div>
                </div>
                
                <div className="card-actions justify-end mt-4">
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => fetchMovieDetails(movie.id)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl max-h-screen overflow-y-auto">
            {detailsLoading ? (
              <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{movieDetails.title}</h3>
                  <button onClick={closeModal} className="btn btn-sm btn-circle">
                    <FaTimes />
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <img 
                      src={movieDetails.poster} 
                      alt={movieDetails.title} 
                      className="w-full rounded-lg shadow-lg"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster'
                      }}
                    />
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        <span><strong>IMDb:</strong> {movieDetails.imdb_rating} ({movieDetails.imdb_votes} votes)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaFilm />
                        <span><strong>Metascore:</strong> {movieDetails.metascore}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaAward />
                        <span><strong>Awards:</strong> {movieDetails.awards}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3 space-y-4">
                    <div className="bg-base-200 p-4 rounded-lg">
                      <p>{movieDetails.plot}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2">
                          <FaUserTie /> Director
                        </h4>
                        <p>{movieDetails.director}</p>
                        
                        <h4 className="font-bold flex items-center gap-2 mt-3">
                          <FaPenAlt /> Writer
                        </h4>
                        <p>{movieDetails.writer}</p>
                        
                        <h4 className="font-bold flex items-center gap-2 mt-3">
                          <FaUsers /> Actors
                        </h4>
                        <p>{movieDetails.actors}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2">
                          <FaCalendarAlt /> Released
                        </h4>
                        <p>{movieDetails.released} ({movieDetails.year})</p>
                        
                        <h4 className="font-bold flex items-center gap-2 mt-3">
                          <FaClock /> Runtime
                        </h4>
                        <p>{movieDetails.runtime}</p>
                        
                        <h4 className="font-bold flex items-center gap-2 mt-3">
                          <FaGlobeAmericas /> Country
                        </h4>
                        <p>{movieDetails.country}</p>
                        
                        <h4 className="font-bold flex items-center gap-2 mt-3">
                          <FaFilm /> Type
                        </h4>
                        <p>{movieDetails.type}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">Genres</h4>
                      <div className="flex flex-wrap gap-2">
                        {movieDetails.genres.map((genre, index) => (
                          <span key={index} className="badge badge-primary">{genre}</span>
                        ))}
                      </div>
                    </div>
                    
                    {movieDetails.images && movieDetails.images.length > 0 && (
                      <div>
                        <h4 className="font-bold mb-2">Screenshots</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {movieDetails.images.map((image, index) => (
                            <img 
                              key={index} 
                              src={image} 
                              alt={`Screenshot ${index + 1}`} 
                              className="w-full h-32 object-cover rounded"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App