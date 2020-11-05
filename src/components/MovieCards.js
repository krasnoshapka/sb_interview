import MovieCard from "./MovieCard";

function MovieCards({movies, search, ...props}) {

  return (
    <div id='movies' className='container'>
      {movies && movies.Search.length > 0 && movies.Search.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} search={search} />
        )
      )
      }
    </div>
  );
}

export default MovieCards;