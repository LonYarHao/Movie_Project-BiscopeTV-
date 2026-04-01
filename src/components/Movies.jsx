import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const Movies = () => {
  let movies = [];

  movies = useSelector((state) => state.movies.movies);

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))
        ) : (
          <h1>there is no movie</h1>
        )}
      </div>
    </div>
  );
};

export default Movies;
