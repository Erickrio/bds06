import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from '../../types/review';
import { requestBackend } from '../../util/requests';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId ,onInsertReview}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);
    console.log(formData);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
    .then(response =>{
      setValue('text','');
      onInsertReview(response.data);
      console.log("SUCESSO AO SALVAR",response);
    }).catch(error =>{
      console.log("ERRO AO SALVAR",error);
    })
  };

  return (
    <div className="container">
      <div className="review-form">
        <p>Deixe a sua avaliação aqui</p>
        <button>SALVAR AVALIAÇÂO</button>
      </div>
    </div>
  );
};
export default ReviewForm;
