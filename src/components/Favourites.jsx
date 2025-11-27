
import { Link } from "react-router-dom";

function Favourites({favourites, setFavourites, placeholder}) {
    return (
        <div className="favourites-section">
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
                <h2>My Favourites</h2>
                {favourites.length > 0 && (
                    <button
                        className="clear-favourites-btn"
                        onClick={() => setFavourites([])}
                        title="Clear all favourite movies"
                    >
                        Clear All
                    </button>
                )}
            </div>
            <div className="container">
                {favourites.length === 0 ? (
                    <p>No favourite movies yet!</p>
                ) : (
                    favourites.map(movie => (
                        <div key={movie.imdbID} className="movie">
                            <button
                            className="favourite-btn favourited"
                            title="Remove from favourites"
                            onClick={() => {
                                setFavourites(favourites.filter(fav => fav.imdbID !== movie.imdbID))
                            }}
                            >
                                <i className="fas fa-heart"></i>
                            </button>
                            <Link to={`/movie/${movie.imdbID}`}>
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
                    ))
                )}
            </div>
        </div>
    );
}
export default Favourites