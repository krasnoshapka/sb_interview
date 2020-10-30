import {useEffect, useState} from "react";
import {Link, useParams, useLocation} from "react-router-dom";
import axios from "axios";
import {API_KEY, API_URL} from "../utils/conf";

function MovieDetail() {
  const {id} = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL, {
        params: {
          apikey: API_KEY,
          i: id
        }
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (<div>
    <Link to={{
      pathname: `/`,
      search : location.search
    }}>Back to list</Link><br/>

    {!movie ? (<div>Fetching...</div>) : (
      <div id='detail'>
        <h1>{movie.Title}</h1>
        <img src={movie.Poster} alt={movie.Title} />
        <p>Actors: {movie.Actors}</p>
        <p>Rating: {movie.imdbRating}</p>
        <p>Genre: {movie.Genre}</p>
      </div>
    )}
  </div>);
}

export default MovieDetail;