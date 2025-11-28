
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";
import Spinner from "./Spinner";

function Home({favourites, setFavourites, placeholder}) {
    const [showWelcome, setShowWelcome] = useState(true);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const API_KEY = "YOUR_API_KEY";  

    useEffect(() => {
        fetchMovies("Transformers");
    }, []);
   
    useEffect(() => {
        fetchMovies(query.trim() || "Transformers", page);
    }, [page]);

    const fetchMovies = async (searchTerm, pageNumber = 1) => {
        setLoading(true);
        setError(null);
        setResults([]);

        try {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm.trim()}&page=${pageNumber}`);
            const data = await response.json();
            console.log(response);
            if (data.Response === 'True') {
                setResults(data.Search);
            } else {
                setError(data.Error);
            }
        }
        catch (err) {
            setError('Something went wrong. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };

    const handlsSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            setPage(1);
            fetchMovies(query.trim());
        }
    };

    const uniqueResults = results.filter(
        (movie, index, self) =>
            index === self.findIndex((m) => m.imdbID === movie.imdbID)
    );

    return(

        <div>
            {/* Header & Search Form */}
            <h1>MovieSearch</h1>
            <form onSubmit={handlsSearch}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}/>
                <button type="submit">
                    <i className="fas fa-magnifying-glass"></i>
                </button>
            </form>

            {showWelcome && (
                <div className="welcome-toast">
                    <span>
                        Welcome to the Movie Search App — a place where you can find information
                        about any movie you want!
                    </span>
                    <button
                        className="welcome-close"
                        onClick={() => setShowWelcome(false)}
                        aria-label="Close welcome message"
                    >X</button>
                </div>
            )}


            {/* Main container with movie cards */}
            {loading && <Spinner />}
            {error && results.length === 0 && <p style={{color: 'red'}}>{error}</p>}
            <div className="container"> 
                {uniqueResults.map((movie) => {
                    const isFavourited = favourites.some(fav => fav.imdbID === movie.imdbID);
                    console.log();
                    return(
                        <div key={movie.imdbID} className="movie">
                            <button
                            className={`favourite-btn ${isFavourited ? "favourited" : ""}`}
                            onClick={() => {
                                if(isFavourited) {
                                    setFavourites(favourites.filter(fav => fav.imdbID !== movie.imdbID));
                                }
                                else {
                                    setFavourites([...favourites, movie]);
                                }
                            }}
                            title={isFavourited ? "Remove from favourites" : "Add to favourites"}
                            >
                                {isFavourited ? <i className="fa-solid fa-heart"></i> : <i className="fa-solid fa-heart"></i>}
                            </button>
                            <Link to={`/movie/${movie.imdbID}`} style={{
                                textDecoration: 'none', color: 'inherit'}}>
                                    <div className="year"><p>{movie.Year}</p></div>
                                <div className="image">
                                    <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = placeholder;
                                    }}
                                    />
                                </div>
                                <div className="info">
                                    <span>{movie.Type}</span>
                                    <p>{movie.Title}</p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>

            <div className="pagination">
                <button
                disabled = {page === 1}
                onClick={() => setPage(page - 1)}
                >Previous</button>
                <span> Page {page}</span>
                <button
                disabled = {results.length < 10}
                onClick={() => setPage(page + 1)}
                >Next</button>
            </div>
        </div>
    );
}
export default Home
