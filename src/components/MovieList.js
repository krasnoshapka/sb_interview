import {useState} from 'react';

function MovieList() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch movies
    setLoading(true);
    setLoading(false);
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
        <div>List</div>
      )
    }
  </div>);
}

export default MovieList;