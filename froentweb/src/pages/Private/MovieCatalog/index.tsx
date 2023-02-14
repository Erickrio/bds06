import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

      <div className="row">
        {isLoading ? (
          <MovieCatalogLoad />
        ) : (
        <div>
          <Link to="/movies/1">
            <p>Acessar /movies/1</p>
          </Link>
        </div>
        )}
      </div>

      <div className="row">
        <div>
          <Link to="/movies/2">
            <p>Acessar /movies/2</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCatalog;
