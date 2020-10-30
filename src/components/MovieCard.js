import {Link} from "react-router-dom";

function MovieCard({movie, query, ...props}) {
  return (<div>
    <Link to={{
      pathname: `movie/${movie.imdbID}`,
      search: `?query=${query}`
    }}>
      <img src={movie.Poster} alt={movie.Title} />
      <span>{movie.Title}</span>
    </Link>
  </div>);
}

export default MovieCard;