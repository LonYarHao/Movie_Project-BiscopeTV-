import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";
import { Spinner } from "flowbite-react";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const FALLBACK_IMG =
    "https://placehold.co/500x750/1f2937/6b7280?text=No+Image";

  const movieDetail = async () => {
    const res = await api.get(
      `/movie/${id}?api_key=${api_key}&append_to_response=credits,videos`,
    );
    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
    if (id) movieDetail();
    return () => dispatch(removeSelectedMovie({}));
  }, [id]); // Added id to dependency array

  const movie = useSelector((state) => state.movies.movie);
  const isLoaded = movie && movie.id;

  const posterSrc = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : FALLBACK_IMG;

  const fmt = (n) => (n && n > 0 ? `$${n.toLocaleString()}` : "N/A");
  const runtime = movie?.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : "N/A";

  const trailer = movie?.videos?.results?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube",
  );
  const director = movie?.credits?.crew?.find((c) => c.job === "Director");
  const topCast = movie?.credits?.cast?.slice(0, 6) ?? [];

  return (
    <div className="container mx-auto px-4 mt-8 mb-12">
      <button
        onClick={() => navigate(-1)}
        // CHANGED: text-gray-600 -> text-gray-800 for better contrast on white
        className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black transition-colors"
      >
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>

      {!isLoaded ? (
        <div className="flex justify-center mt-20">
          <Spinner aria-label="Loading movie details" size="xl" />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Poster */}
          <div className="flex-shrink-0 w-full md:w-64">
            <img
              src={posterSrc}
              alt={movie.title}
              onError={(e) => {
                e.target.src = FALLBACK_IMG;
              }}
              className="w-full rounded-xl border border-gray-300 shadow-lg"
            />
            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2.5 rounded-lg transition-colors shadow-md"
              >
                <i className="fa-brands fa-youtube"></i> Watch Trailer
              </a>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {movie.title}
            </h1>

            {movie.tagline && (
              // CHANGED: text-gray-500 -> text-gray-700
              <p className="text-base italic text-gray-700 mb-4">
                "{movie.tagline}"
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm font-medium text-gray-800">
              <span className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-md text-amber-700">
                <i className="fa-solid fa-star text-xs"></i>
                {movie.vote_average?.toFixed(1)} / 10
              </span>
              <span className="flex items-center gap-1">
                <i className="fa-regular fa-calendar mr-1"></i>
                {movie.release_date}
              </span>
              <span className="flex items-center gap-1">
                <i className="fa-regular fa-clock mr-1"></i>
                {runtime}
              </span>
              <span
                className={`px-2 py-1 rounded-md text-xs font-bold ${
                  movie.status === "Released"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {movie.status}
              </span>
            </div>

            {/* Genres */}
            {movie.genres?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((g) => (
                  <span
                    key={g.id}
                    className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full border border-blue-200"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            )}

            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: "Rating",
                  value: movie.vote_average?.toFixed(1) ?? "N/A",
                  icon: "fa-solid fa-star",
                },
                {
                  label: "Votes",
                  value: movie.vote_count?.toLocaleString() ?? "N/A",
                  icon: "fa-solid fa-users",
                },
                {
                  label: "Budget",
                  value: fmt(movie.budget),
                  icon: "fa-solid fa-sack-dollar",
                },
                {
                  label: "Revenue",
                  value: fmt(movie.revenue),
                  icon: "fa-solid fa-chart-line",
                },
              ].map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-sm"
                >
                  <p className="text-xs text-gray-700 uppercase tracking-wider mb-1 flex items-center gap-1 font-bold">
                    <i className={`${icon} text-blue-600`}></i> {label}
                  </p>
                  <p className="text-base font-black text-gray-900">{value}</p>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-align-left text-blue-600"></i>{" "}
                Overview
              </h3>
              <p className="text-base leading-relaxed text-gray-800">
                {movie.overview || "No overview available."}
              </p>
            </div>

            {/* Director - FIXED CONTRAST HERE */}
            {director && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                <i className="fa-solid fa-clapperboard mr-2 text-blue-600"></i>
                <span className="text-base font-bold text-gray-900">
                  Director:
                </span>{" "}
                <span className="text-lg text-gray-900 font-medium ml-1">
                  {director.name}
                </span>
              </div>
            )}

            {/* Top Cast */}
            {topCast.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-masks-theater text-blue-600"></i>{" "}
                  Top Cast
                </h3>
                <div className="flex flex-wrap gap-3">
                  {topCast.map((actor) => (
                    <div
                      key={actor.cast_id}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm border-2 border-gray-100 shadow-sm"
                    >
                      <i className="fa-solid fa-user text-gray-400"></i>
                      <span className="font-bold text-gray-900">
                        {actor.name}
                      </span>
                      <span className="text-gray-600">
                        as {actor.character}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Production details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm border-t border-gray-100 pt-6">
              {movie.production_countries?.length > 0 && (
                <div>
                  <p className="text-xs text-gray-900 uppercase tracking-widest mb-2 font-black flex items-center gap-1">
                    <i className="fa-solid fa-earth-americas text-blue-600"></i>{" "}
                    Production Countries
                  </p>
                  <p className="text-gray-800 font-medium">
                    {movie.production_countries.map((c) => c.name).join(", ")}
                  </p>
                </div>
              )}
              {/* ... Other Production sections updated similarly ... */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
