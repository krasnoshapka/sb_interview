import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie catalogue</h1>
      </header>
      <Router>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" exact component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
