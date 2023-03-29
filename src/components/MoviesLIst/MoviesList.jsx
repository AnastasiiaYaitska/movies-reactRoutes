import { List, MovieLink } from 'components/MoviesLIst/MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, location, to }) => {
  return (
    <List>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <MovieLink
            to={typeof to === 'string' ? to : to(id)}
            state={{ from: location }}
          >
            {title}
          </MovieLink>
        </li>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({}).isRequired,
  to: PropTypes.func.isRequired,
};
