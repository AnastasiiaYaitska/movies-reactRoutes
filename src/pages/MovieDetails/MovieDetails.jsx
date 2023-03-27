import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'FetchAPI';
import { Wrapper, Description, GoBack, Title } from './MovieDetails.styled';
import { BsArrowLeft } from 'react-icons/bs';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? '/movies');
  console.log('goBackRef', location);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchedMovie = async () => {
      try {
        const selectMovie = await fetchMovieById(+movieId, {
          signal: abortController.signal,
        });
        setMovie(selectMovie);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchedMovie();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path, tagline } = movie;
  console.log(genres);

  return (
    <>
      <span>
        <BsArrowLeft />
      </span>
      <GoBack to={goBackRef.current}>Go back</GoBack>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width="300"
          alt={tagline}
        />
        <Description>
          <Title>{title}</Title>
          <p> User Score: {vote_average * 10} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name + ' ')}</p>
        </Description>
      </Wrapper>
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
