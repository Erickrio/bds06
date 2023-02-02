// import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

// import './styles.css';

const Auth = () => {
  return (
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Divulgue seus Produtos no DS Catalog</h1>
                <p> Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
                {/* <AuthImage /> */}
            </div>
            <div className="auth-form-container">
               <Switch>
                 <Route path="/admin/auth/login">
                    <Login />
                 </Route>
               </Switch>
            </div>
        </div>
  );
};

export default Auth;
