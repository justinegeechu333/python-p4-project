import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { ConsessionStand } from "./ConsessionStand";
import "./App.css";
import Edit from "./Edit";
import Purchase from "./Purchase";
import Header from "./Header";
import Purchased from "./Purchased";

function App() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <div className="app">
            <Header />
            <main>
                <Routes path="/">
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="movies" element={<Movies movies={movies} />} />
                    <Route
                        path="consessionstand"
                        element={<ConsessionStand />}
                    />
                    <Route
                        path="admin/movies"
                        element={<Movies movies={movies} isAdmin={true} />}
                    />
                    <Route
                        path="admin/edit/:id"
                        element={<Edit movies={movies} setMovies={setMovies} />}
                    />
                    <Route
                        path="admin/new"
                        element={<Edit isNew={true} setMovies={setMovies} />}
                    />
                    <Route
                        path="purchase/:id"
                        element={<Purchase movies={movies} />}
                    />
                    <Route
                        path="purchased/:confirmationId"
                        element={<Purchased />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
