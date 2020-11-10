import {useState, useEffect} from 'react';
import MovieCards from "./MovieCards";
import {Link, useLocation} from "react-router-dom";
import {fetchMovies} from "../utils/api";

function MovieList() {
  const location = useLocation();
  const URLParams= new URLSearchParams(location.search);
  const [query, setQuery] = useState(URLParams.get("query") ?? '');
  const page = URLParams.get("page") ?? 1;

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      fetchMovies(query, page)
        .then((movies) => {
          setMovies(movies);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setMovies(null);
          setLoading(false);
        })
    }
  }, [query, page]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (<div>
    <form onSubmit={(event) => event.preventDefault()}>
      <input type='input' name='query' value={query} onChange={handleChange} placeholder='Enter movie name' />
    </form>
    {
      loading ? (<span>Loading...</span>) : (
        <div>
          <MovieCards movies={movies} search={`?query=${query}&page=${page}`} />
          <div id='pagination'>
            {movies && page > 1 && (<Link to={{
              pathname: '/',
              search: `?query=${query}&page=${+page-1}`
            }} >Previous page </Link>)}
            {movies && (page + 1) <= Math.ceil(movies.totalResults / 10) && (<Link to={{
              pathname: '/',
              search: `?query=${query}&page=${+page+1}`
            }} > Next page</Link>)}
          </div>
        </div>
      )
    }
  </div>);
}

export default MovieList;