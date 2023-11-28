import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { Food } from "./Food";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <nav className="">
        <ul className="navigate">
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/Food">Food</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="food" element={<Food />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
