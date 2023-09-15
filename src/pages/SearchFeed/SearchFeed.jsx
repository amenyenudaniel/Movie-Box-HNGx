import "./SearchFeed.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieSearchResults } from "../../utils/fetchFromApi";
import { Error, Loader, MovieCard, SearchBar } from "../../components";
const SearchFeed = ({ handleSearch, handleChange, handleSubmit }) => {
  const { movieTitle } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      getMovieSearchResults(`${movieTitle}`)
        .then((data) => {
          setMovies(data?.results);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [movieTitle]);

  if (loading) {
    return <Loader />;
  }

  if (movies.length === 0) {
    return <Error />;
  }
  return (
    <>
      <div className="app__search">
        <Link className="logo__search" to={"/"}>
          <img src="/tv.png" alt="logo" />
          <h3>MovieBox</h3>
        </Link>

        <SearchBar
          handleSearch={handleSearch}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <h1 className="search__name">
        Search Results For: <span>{movieTitle}</span>
      </h1>

      <div className="search__container">
        {movies && movies?.map((item) => <MovieCard item={item} />)}
      </div>
    </>
  );
};

export default SearchFeed;
