// import axios from "axios";

import axios from "axios";

// const baseUrl =
//   "https://api.themoviedb.org/3/discover/movie?api_key=6d77f6ad74fe305e31119672f2252108";

// const options = {
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer 6d77f6ad74fe305e31119672f2252108`,
//   },
// };

// export const fetchFromApi = async () => {
//   try {
//     const { data } = axios.get(baseUrl, options);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

//   api key 6d77f6ad74fe305e31119672f2252108
// api access token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc3ZjZhZDc0ZmUzMDVlMzExMTk2NzJmMjI1MjEwOCIsInN1YiI6IjY0ZmYyMjQxMmRmZmQ4MDExZGYwOTViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OSqvBnkj_7O4c2oN039K3sNZDuUX7YZMqJlNw0sLoTg

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

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
