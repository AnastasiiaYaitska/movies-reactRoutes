import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'FetchAPI';
import { MoviesList, MovieLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log('home', location);

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
  console.log(movies);

  return (
    <MoviesList>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <MovieLink to={`movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </li>
      ))}
    </MoviesList>
  );
};

export default Home;
