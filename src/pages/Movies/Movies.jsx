import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'FetchAPI';
import { MoviesList } from 'components/MoviesLIst/MoviesList';

const Movies = () => {
  const [queryMovie, setQueryMovie] = useState([]);
  const [input, setInput] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    if (query === '') {
      return;
    }
    const searchMovie = async () => {
      try {
        const search = await fetchSearchMovie(query, {
          signal: abortController.signal,
        });
        setQueryMovie(search);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchMovie();

    return () => abortController.abort();
  }, [query]);

  const updateQueryString = e => {
    const query = e.target.value;
    setInput(query);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (input === undefined || input === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: input });
    setInput('');
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="">
          {' '}
          <input
            type="text"
            value={input}
            name="movie"
            onChange={updateQueryString}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={queryMovie} to={id => `${id}`} location={location} />
    </>
  );
};

export default Movies;
