import './App.css';
import React, {useEffect, useState} from 'react';
//import movieimages from "./data/movies-with-images.json";
import MovieCard from './components/MovieCard';
import NavigationBar from './components/NavigationBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([]);

  function parseData(data) {    
    data.forEach(d => {
      const fields = d.fields;
      setMovies(prevState => ([
        ...prevState,
        {
          id:fields.pk,
          poster:fields.poster_url,
          title:fields.movie_title,
          overview:fields.synoposis,
        }
      ]))
    })
  }

  useEffect(() => {
    fetch('http://localhost:8000/movie/')
    .then(response => response.json())
    .then(data => parseData(data))
  }, [])

  return (
    <div className="App">
      <nav class="navbar">
        <NavigationBar/>
      </nav>

      <div className="container">
        {movies.map(movie => 
        <MovieCard movie={movie} key={movie.id} />
      )}
      </div>
    </div>
  );
}

export default App;
 