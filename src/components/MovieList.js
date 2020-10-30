import {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";
import {API_KEY, API_URL} from "../utils/conf";
import {Link, useLocation} from "react-router-dom";

function MovieList() {
  const location = useLocation();
  const queryURL = new URLSearchParams(location.search).get("query");
  const [query, setQuery] = useState(queryURL ?? '');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);

  const fetchMovies = () => {
    setLoading(true);
    axios
      .get(API_URL, {
        params: {
          apikey: API_KEY,
          s: query,
          page: page
        }
      })
      .then((response) => {
        const {Search, totalResults, Response} = response.data;
        if (Response == 'True') {
          setMovies({Search, totalResults});
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (<div>
    <form onSubmit={handleSubmit}>
      <input type='input' name='query' value={query} placeholder='Enter movie name' onChange={handleChange} />
      <input type="submit" value='Search' />
    </form>
    {
      loading ? (<span>Loading...</span>) : (
        <div>
          <div id='movies' className='container'>
            {movies && movies.Search.length > 0 && movies.Search.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} query={query} />
              )
            )
            }
          </div>
          <div id='pagination'>
            {movies && page > 1 && (<Link to='/' onClick={() => {setPage(page-1)}} >Previous page </Link>)}
            {movies && (page + 1) <= Math.ceil(movies.totalResults / 10) && (<Link to='/' onClick={() => {setPage(page+1)}} > Next page</Link>)}
          </div>
        </div>
      )
    }
  </div>);
}

export default MovieList;