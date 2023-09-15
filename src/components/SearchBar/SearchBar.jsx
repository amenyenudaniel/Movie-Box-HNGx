import "./SearchBar.css";
import SearchIcon from "../../assets/search.svg";

const SearchBar = ({ handleChange, handleSubmit, movieTitle }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input__container">
        <input
          type="text"
          placeholder="Search Movie..."
          required
          onChange={handleChange}
          value={movieTitle}
        />
        <img src={SearchIcon} alt="search-icon" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default SearchBar;
