import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {
        movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))
      }
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
