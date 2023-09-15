import { Routes, Route } from "react-router-dom";
import { Home, SearchFeed, MovieDetails } from "./pages";
import "./App.css";
import { useState } from "react";
import { Footer, ScrollToTop } from "./components";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [movieTitle, setMovieTitle] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovieTitle(e.target.value);
  };
  const handleSearch = (movieTitle) => {
    if (movieTitle) {
      navigate(`/search/${movieTitle}`);
    }
    setMovieTitle("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(movieTitle);
  };
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <Home
              handleSubmit={handleSubmit}
              handleSearch={handleSearch}
              handleChange={handleChange}
              query={movieTitle}
            />
          }
          path="/"
        />
        <Route
          element={
            <SearchFeed
              handleSearch={handleSearch}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              movieTitle={movieTitle}
            />
          }
          path="/search/:movieTitle"
        />
        <Route element={<MovieDetails />} path="/movie/:id" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
