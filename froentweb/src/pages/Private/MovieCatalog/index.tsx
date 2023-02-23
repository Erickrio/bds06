import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../../../components/MovieCard';
import { Movie } from '../../../types/movie';
import { SpringPage } from '../../../types/vendor/spring';
import { requestBackend } from '../../../util/requests';
import MovieCatalogLoad from './MovieCatalogLoad';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
        console.log(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="row catalog-title-container">
        <h1>Tela de Listagem de Filmes </h1>
      </div>

      {isLoading ? (
        <MovieCatalogLoad />
      ) : (
        <div className="catalog-list">
          {page?.content.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movies/${movie.id}/reviews`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieCatalog;
