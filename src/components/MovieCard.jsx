import React from "react";
import { Link } from "react-router-dom";

const FALLBACK_IMG = "https://placehold.co/500x750/1f2937/6b7280?text=No+Image";

const MovieCard = ({ movie }) => {
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : FALLBACK_IMG;

  return (
    <Link to={`/movies/details/${movie.id}`} className="no-underline group">
      <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-transform duration-200 group-hover:scale-105">
        {/* Fixed-height poster */}
        <div className="w-full h-64 flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img
            src={posterSrc}
            alt={movie.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = FALLBACK_IMG;
            }}
          />
        </div>

        {/* Card body — flex-grow so all cards stretch to same height */}
        <div className="flex flex-col flex-1 p-3 gap-2">
          <h5 className="text-sm font-bold text-gray-900 dark:text-white truncate">
            {movie.title}
          </h5>

          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 flex-1">
            {movie.overview
              ? movie.overview.slice(0, 100)
              : "No description available."}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <i className="fa-solid fa-star text-xs"></i>
              {movie.vote_average?.toFixed(1) ?? "N/A"}
            </span>
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-calendar text-xs"></i>
              {movie.release_date ?? "Unknown"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
