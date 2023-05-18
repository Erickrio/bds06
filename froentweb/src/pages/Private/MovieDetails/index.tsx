import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../../../components/ReviewForm';
import ReviewListing from '../../../components/ReviewListing';

import { Review } from '../../../types/review';
import { hasAnyRoles } from '../../../util/auth';
import { BASE_URL, requestBackend } from '../../../util/requests';
import { Movie } from '../../../types/movie';

import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  const [movies, setMovies] = useState<Movie>();

  useEffect(() => {
    const getReviews : AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(getReviews).then((response) => {
      setReviews(response.data);
    });
  }, [movieId,reviews.length]);

  useEffect(() => {
    const getMovies: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/`,
      withCredentials: true,
      baseURL: BASE_URL,
    };
    requestBackend(getMovies).then((response) => {
      setMovies(response.data);
      console.log('movies', response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-containerr">
       {/* <h1>Tela detalhes do filme id: {movieId}</h1>  */}
       {
        <div className="movie-details-card">
          <div className="movie-details-img">
            <img src={movies?.imgUrl} alt={movies?.title} />
          </div>

          <div className="movie-details-info">
            <h2>{movies?.title}</h2>
            <h3>{movies?.year}</h3>
            <p>{movies?.subTitle}</p>
            <div className="movie-details-info-p">
              <p>{movies?.synopsis}</p>
            </div>
          </div>
        </div>
      }

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      
       {reviews.length === 0 ? ' ' : <ReviewListing reviews={reviews} />}   
      {/* <ReviewListing reviews={reviews} />     */}
    </div>
  );
};

export default MovieDetails;
