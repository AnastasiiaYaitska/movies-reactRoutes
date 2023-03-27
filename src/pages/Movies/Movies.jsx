import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'FetchAPI';

const Movies = () => {
  const [queryMovie, setQueryMovie] = useState([]);
  const [input, setInput] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  console.log('movie', location);

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
      <ul>
        {queryMovie.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ form: location }}>
              {title}
            </Link>{' '}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
