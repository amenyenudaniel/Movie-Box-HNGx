import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader, SideBar } from "../../components";
import { HiPlay } from "react-icons/hi";

import "./MovieDetails.css";
const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "6d77f6ad74fe305e31119672f2252108";
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  useEffect(() => {
    setLoading(true);
    console.log(movieDetails);
    try {
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
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      alert("An Error Ocurred. Please try again", error);
    }
  }, []);

  const releaseDate = new Date(movieDetails?.release_date);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const utcReleaseDate = releaseDate.toLocaleDateString("en-US", options);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Link className="logo__nav" to={"/"}>
        <img src="/tv.png" alt="logo" />
        <h3>MovieBox</h3>
      </Link>
      <div className="app__movieDetails__container">
        <SideBar />
        <div className="app__movieDetails">
          <a href={movieDetails?.homepage} target="__blank">
            <div className="react__player">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
                alt="movie__image"
                data-testid="movie-poster"
              />
              <div className="play__btn">
                <HiPlay fontSize={"5rem"} color="white" />
              </div>
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
          <p className="runtime" data-testid="movie-runtime">
            {movieDetails?.runtime} Minutes
          </p>
          <div className="movie__overview">
            <p>{movieDetails?.overview}</p>
          </div>
          <p className="tagline">
            tagline: <span>{movieDetails?.tagline}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
