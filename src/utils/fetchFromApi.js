// import axios from "axios";

import axios from "axios";

const url = "https://api.themoviedb.org/3/movie/top_rated";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc3ZjZhZDc0ZmUzMDVlMzExMTk2NzJmMjI1MjEwOCIsInN1YiI6IjY0ZmYyMjQxMmRmZmQ4MDExZGYwOTViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OSqvBnkj_7O4c2oN039K3sNZDuUX7YZMqJlNw0sLoTg`,
  },
};
export const getInitialMovies = async () => {
  try {
    const { data } = await axios.get(url, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Search Movies

const options2 = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc3ZjZhZDc0ZmUzMDVlMzExMTk2NzJmMjI1MjEwOCIsInN1YiI6IjY0ZmYyMjQxMmRmZmQ4MDExZGYwOTViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OSqvBnkj_7O4c2oN039K3sNZDuUX7YZMqJlNw0sLoTg`,
  },
};

export const getMovieSearchResults = async (movieTitle) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6d77f6ad74fe305e31119672f2252108&query=${movieTitle}`,
      options2
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
