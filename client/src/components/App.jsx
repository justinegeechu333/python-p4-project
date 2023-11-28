import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { ConsessionStand } from "./ConsessionStand";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="app">
      <nav>
        <ul className="navigate">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/consessionstand">Consession Stand</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies movies={movies} />} />
          <Route path="consessionstand" element={<ConsessionStand />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
