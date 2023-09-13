import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchBar } from "../../components";
import logo from "../../assets/Logo.png";
import Menu from "../../assets/Menu.png";
import { Link } from "react-router-dom";
import "./MovieDetails.css";
import play from "../../assets/Play.png";

const MovieDetails = ({ match }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    const apiKey = "6d77f6ad74fe305e31119672f2252108";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    //
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  const releaseDate = new Date(movieDetails?.release_date);
  const options = { year: "numeric" };
  const utcReleaseDate = releaseDate.toLocaleDateString("en-US", options);
  return (
    <>
      <div className="navbar__movieDetails">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <SearchBar />
        <div className="app__signIn">
          <p>Sign in</p>
          <img src={Menu} alt="menu" />
        </div>
      </div>
      <div className="app__movieDetails">
        <a href={movieDetails?.homepage} target="__blank">
          <div className="react__player">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
              alt="movie__image"
              data-testid="movie-poster"
            />
          </div>
        </a>
        <div className="movie__details-contents">
          <h3 data-testid="movie-title">{movieDetails?.title}</h3>
          <p className="dot">.</p>
          <p data-testid="movie-release-date">{utcReleaseDate}</p>

          <p className="dot">.</p>

          <div className="genre__container">
            {movieDetails?.genres?.map((genre) => (
              <div className="genre" key={genre?.id}>
                <p>{genre?.name}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="status">{movieDetails?.status}</p>
        <div className="movie__overview">
          <p>{movieDetails?.overview}</p>
        </div>
        <p className="tagline">
          tagline: <span>{movieDetails?.tagline}</span>
        </p>
      </div>
    </>
  );
};

export default MovieDetails;
