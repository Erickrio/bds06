import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from '../../types/review';
import { requestBackend } from '../../util/requests';
import Button from '../Button';
import { toast } from 'react-hot-toast';


import './styles.css';

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
    .then(response =>  {
      setValue('text','');
      onInsertReview(response.data);
       console.log("Salvo Com sucesso!",response);
       toast.success('Comentário salvo com sucesso!');
    })
    .catch(error => {
      toast.error('Erro ao salvar!');
      console.log("Erro ao Salvar",error);
      
    })
  };

  return (
    <div className="container-review">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('text', {
          required: 'Campo obrigatório',
        })}
        type="text"
        placeholder="Deixe sua avaliação aqui"
        name="text"
      />
      {/* {errors.text?.message} */}
      <div className="invalid-feedback d-block">  {errors.text?.message}</div>

      <div className="review-button">
        <Button text="salvar avaliação" />
      </div>
    </form>
  </div>
  );
};
export default ReviewForm;
