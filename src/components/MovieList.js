import {useState} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";
import {API_KEY, API_URL} from "../utils/conf";

function MovieList() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch movies
    setLoading(true);
    axios
      .get(API_URL, {
        params: {
          apikey: API_KEY,
          s: query
        }
      })
      .then((response) => {
        setMovies(response.data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (<div>
    <form onSubmit={handleSubmit}>
      <input type='input' name='search' id='search' placeholder='Enter movie name' onChange={handleChange} />
      <input type="submit" value='Search' />
    </form>
    {
      loading ? (<span>Loading...</span>) : (
        <div id='movies'>
          {movies.length > 0 ? movies.map((movie) => (
              <MovieCard movie={movie} />
            )
          ) : ''
          }
        </div>
      )
    }
  </div>);
}

export default MovieList;