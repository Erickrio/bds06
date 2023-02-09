import ButtonIcon from '../../../components/ButtonIcon';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form >
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
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