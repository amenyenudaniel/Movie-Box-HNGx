import "./SearchBar.css";
import SearchIcon from "../../assets/search.svg";

const SearchBar = ({ handleChange, handleSubmit, query }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input__container">
        <input
          type="text"
          placeholder="What do you want to watch?"
          required
          onChange={handleChange}
          value={query}
        />
        <img src={SearchIcon} alt="search-icon" />
      </div>
    </form>
  );
};

export default SearchBar;
