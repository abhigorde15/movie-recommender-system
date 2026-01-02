import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchMovies = () => API.get("/movies");
export const fetchRecommendations = (movie) =>
  API.post("/recommend", { movie });
