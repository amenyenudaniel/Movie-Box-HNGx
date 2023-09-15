import "./Moviecard.css";
import placeholder from "../../assets/placeholder__img.webp";
import { Link } from "react-router-dom";
const MovieCard = ({ item: { title, release_date, poster_path, id } }) => {
  const releaseDate = new Date(release_date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const utcReleaseDate = releaseDate.toLocaleDateString("en-US", options);

  return (
    <Link data-testid="movie-card" className="movie__card" to={`/movie/${id}`}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : { placeholder }
        }
        alt="movie__poster"
        data-testid="movie-poster"
        loading="lazy"
      />
      <div className="movie__content">
        <h6 data-testid="movie-title">
          {title.length > 30 ? `${title.substring(0, 25)}... ` : title}
        </h6>
        <p data-testid="movie-release-date">{utcReleaseDate}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
