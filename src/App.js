import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SearchFeed, MovieDetails } from "./pages";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SearchFeed />} path="/search-details" />
        <Route element={<MovieDetails />} path="/movie-details/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
