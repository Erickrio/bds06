import { useParams } from 'react-router-dom';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  return (
    <div className="">
      <h1>Tela detalhes do filme id: {movieId}</h1>
    </div>
  );
};

export default MovieDetails;
