import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { fetchMovieById, fetchTrendingMovies } from 'FetchAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchedMovie = async () => {
      try {
        const selectMovie = await fetchMovieById(movieId, {
          signal: abortController.signal,
        });
        setMovie(selectMovie);
        console.log(movie);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchedMovie();
    console.log(movie);
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const handleGoBack = async () => {
    const response = await fetchTrendingMovies();
    console.log('click');
    navigate('/');
  };

  const { title, vote_average, overview, genres, poster_path, tagline } = movie;
  console.log(genres);

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        🔙 Go back
      </button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width="300"
          alt={tagline}
        />
        <div>
          <h1>{title}</h1>
          <p> ⭐️ {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <>
            {/* {genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })} */}
          </>
        </div>
      </div>
      <ul>
        {' '}
        Additional information
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
