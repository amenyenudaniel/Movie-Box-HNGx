import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SearchFeed, MovieDetails } from "./pages";
import "./App.css";
import { Footer, ScrollToTop } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SearchFeed />} path="/search-details" />
        <Route element={<MovieDetails />} path="/movie-details/:id" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
