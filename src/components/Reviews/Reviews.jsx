import { fetchMovieReviewsById } from 'FetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, ReviewItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const movieReviews = async () => {
      try {
        const fetchedReviews = await fetchMovieReviewsById(movieId, {
          signal: abortController.signal,
        });
        console.log(fetchedReviews);
        setReviews(fetchedReviews);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieReviews();
    return () => abortController.abort();
  }, [movieId]);
  console.log(reviews);
  return (
    <ReviewsList>
      {reviews !== [] ? (
        reviews.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <article>
              <p>{author}</p>
              <p>{content}</p>
            </article>
          </ReviewItem>
        ))
      ) : (
        <p>Unfortunately it's any reviews yet </p>
      )}
    </ReviewsList>
  );
};

export default Reviews;
