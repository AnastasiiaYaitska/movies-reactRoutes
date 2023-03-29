import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'FetchAPI';
import { useLocation } from 'react-router-dom';

import { MoviesList } from 'components/MoviesLIst/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies({
          signal: abortController.signal,
        });
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <MoviesList movies={movies} to={id => `movies/${id}`} location={location} />
  );
};

export default Home;
