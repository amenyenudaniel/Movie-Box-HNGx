import React from "react";
import "./Moviecard.css";
import { Link } from "react-router-dom";
const MovieCard = ({ item: { title, release_date, poster_path, id } }) => {
  const releaseDate = new Date(release_date);
  const options = { year: "numeric" };
  const utcReleaseDate = releaseDate.toLocaleDateString("en-US", options);

  return (
    <Link
      data-testid="movie-card"
      className="movie__card"
      to={`/movie-details/${id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="movie__poster"
        data-testid="movie-poster"
        loading="lazy"
      />
      <div className="movie__content">
        <h6 data-testid="movie-title">
          {" "}
          {title.length > 30 ? `${title.substring(0, 30)}... ` : title}
        </h6>
        <p data-testid="movie-release-date">{utcReleaseDate}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
