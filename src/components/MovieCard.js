import {Link} from "react-router-dom";

function MovieCard({movie, search, ...props}) {
  return (<div className='item'>
    <Link to={{
      pathname: `movie/${movie.imdbID}`,
      search: search
    }}>
      <img src={movie.Poster} alt={movie.Title} /><br />
      <span>{movie.Title}</span>
    </Link>
  </div>);
}

export default MovieCard;