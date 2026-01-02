import { useEffect, useState } from "react";
import { fetchMovies, fetchRecommendations } from "./api";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchMovies().then((res) => setMovies(res.data));
  }, []);

  const handleRecommend = async () => {
    if (!selectedMovie) return;
    const res = await fetchRecommendations(selectedMovie);
    setRecommendations(res.data);
  };

  return (
    <div className="app">
      <h2 className="app-title">Movie Recommender System</h2>

      <div className="controls">
        <select
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
        >
          <option value="">Select a movie</option>
          {movies.map((movie, index) => (
            <option key={index} value={movie}>
              {movie}
            </option>
          ))}
        </select>

        <button
          onClick={handleRecommend}
          disabled={!selectedMovie}
        >
          Show Recommendation
        </button>
      </div>

      <div className="movie-grid">
        {recommendations.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
