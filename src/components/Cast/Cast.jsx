import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActorsById } from 'FetchAPI';
import { ActorsList, ActorName } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchActors = async () => {
      try {
        const actors = await fetchMovieActorsById(movieId, {
          signal: abortController.signal,
        });
        setCredits(actors);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchActors();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const popularActors = useMemo(
    () => credits.filter(actor => actor.popularity > 10),
    [credits]
  );
  console.log(popularActors);

  return (
    <ActorsList>
      {popularActors.map(({ original_name, profile_path, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
            alt={original_name}
            width="100"
          />
          <ActorName>{original_name}</ActorName>
        </li>
      ))}
    </ActorsList>
  );
};

export default Cast;
