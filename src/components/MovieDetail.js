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
      search : `?query=${new URLSearchParams(location.search).get("query")}`
    }}>Back to list</Link><br/>

    {!movie ? (<div>Fetching...</div>) : (
      <div>
        <span>{movie.Title}</span>
      </div>
    )}
  </div>);
}

export default MovieDetail;