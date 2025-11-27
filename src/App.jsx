
import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import MovieDetails from "./components/MovieDetails";
import placeholder from "../src/assets/placeholder.jpg";
import Footer from "./components/Footer";

function App() {
    const [favourites, setFavourites] = useState(() => {
        const saved = localStorage.getItem("favouriteMovies");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("favouriteMovies", JSON.stringify(favourites));
    }, [favourites]);

    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" exact element = {
                        <Home
                            favourites = {favourites}
                            setFavourites = {setFavourites}
                            placeholder = {placeholder}
                        />} 
                />
                <Route path="/favourites" element={
                    <Favourites
                        favourites={favourites}
                        setFavourites = {setFavourites}
                        placeholder={placeholder}
                    />}
                />
                <Route path="/movie/:id" element = {<MovieDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App
