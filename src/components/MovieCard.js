import {Link} from "react-router-dom";

function MovieCard({movie, ...props}) {
  return (<div>
    <Link to={`movie/${movie.imdbID}`}>
      <img src={movie.Poster} alt={movie.Title} />
      <span>{movie.Title}</span>
    </Link>
  </div>);
}

export default MovieCard;