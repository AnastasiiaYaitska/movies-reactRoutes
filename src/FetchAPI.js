import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTljNGVmNDAyODAwODUxODhjZWZjMmU4N2FmNmEwYyIsInN1YiI6IjY0MTk3YmI2MzEwMzI1MDA4NmY5OTkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q-ovqu-7T5oRDliML0kPyxUZJ15bJ1hjveunlXRTE9s';

export const fetchTrendingMovies = async param => {
  const response = await axios.get('/trending/movie/week', param);
  return response.data.results;
};

export const fetchMovieById = async (movieId, param) => {
  const response = await axios.get(`/movie/${movieId}`, param);
  return response.data;
};

export const fetchMovieActorsById = async (movieId, param) => {
  const response = await axios.get(`/movie/${movieId}/credits`, param);
  return response.data.cast;
};

export const fetchMovieReviewsById = async (movieId, param) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, param);
  return response.data.results;
};

export const fetchSearchMovie = async (request, extraParam) => {
  const response = await axios.get(`/search/movie`, {
    params: {
      language: 'en-US',
      query: request,
      include_adult: false,
    },
    ...extraParam,
  });
  return response.data.results;
};
