import MovieCard from "./MovieCard";

function MovieCards({movies, query, page, ...props}) {

  return (
    <div id='movies' className='container'>
      {movies && movies.Search.length > 0 && movies.Search.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} search={`?query=${query}&page=${page}`} />
        )
      )
      }
    </div>
  );
}

export default MovieCards;