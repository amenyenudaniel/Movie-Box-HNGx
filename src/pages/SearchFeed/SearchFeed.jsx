// import "./SearchFeed.css";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getInitialMovies } from "../../utils/fetchFromApi";

// const SearchFeed = () => {
//   const { movieTitle } = useParams();
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getInitialMovies().then((data) => console.log(data));
//   }, []);
//   // useEffect(() => {
//   //   const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
//   //   const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?language=en-US?api_key=${apiKey}`;

//   //   fetch(apiUrl)
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error("Network response was not ok");
//   //       }
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       setMovies(data.results);
//   //       setLoading(false);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching Search Details:", error);
//   //       setLoading(false);
//   //     });

//   //   console.log(movies);
//   // }, []);

//   return <div>Heyyyyyyyyy</div>;
// };

// export default SearchFeed;
