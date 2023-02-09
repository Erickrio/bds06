import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonIcon from '../../../components/ButtonIcon';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

// type LocationState = {
//   from: string;
// }

const Login = () => {

  // const location = useLocation<LocationState>();

  // const { from  } = location.state || { from: { pathname : '/movie' } };   //COMMENT AQUI 

  //  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();
 
  const onSubmit = (formData: FormData) => {
     console.log(formData);
  }

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
        <div className="alert alert-danger">
         Erro ao tentar efetuar o Login.
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
           {...register("username")}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            {...register("password")}
            type="password"
            className="form-control base-input "
            placeholder="Password"
            name="password"
          />
        </div>
     
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
      </form>
    </div>
  );
};


export default Login;