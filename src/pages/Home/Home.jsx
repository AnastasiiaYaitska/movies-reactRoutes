import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'FetchAPI';

export const Home = () => {
  const [movies, setMovies] = useState([]);

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
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
