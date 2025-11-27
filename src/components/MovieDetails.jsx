
import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";
import Spinner from "./Spinner";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = "cf413c5f";

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
                const data = await response.json();
                if (data.Response === 'True') {
                    setMovie(data);
                }else {
                    setError(data.Error);
                }
            }
            catch {
                setError("Error fetching movie details.");
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [id]);

    if (loading) return <Spinner />;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!movie) return null;

    return (
        <div className="movie-container">
            <h2>{movie.Title} ({movie.Year})</h2>
            <div className="movie-info">
                <img
                src={movie.Poster}
                alt={movie.Title}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                }}
                />
                <div className="movie-info-details">
                    <p className="movie-plot"><strong>Plot: </strong>{movie.Plot}</p>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p><strong>Language:</strong> {movie.Language}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>Runtime:</strong> {movie.Runtime}</p>
                    <p><strong>Released on:</strong> {movie.Released}</p>
                    <p><strong>Awards:</strong> {movie.Awards}</p>
                </div>
            </div>   
        </div>
    );
}
export default MovieDetails