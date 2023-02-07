import { Redirect, Route } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from '../../util/auth';



type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};

const PrivateRoute = ({ children, path , roles = [] }: Props) => {
  
  return (
    <Route
      path={path}
      render={({ location }) =>
        //lógica do mais restrito para o mais liberado.
        !isAuthenticated() ? ( 
          <Redirect
          to={{  //Não está autenticado redireciona para p/ Home
            pathname: '/',
            state: { from: location },
        }} 
        />  
        ) : !hasAnyRoles(roles) ? (  //autenticado e não possui ROLES necessario
          <Redirect to="/" />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;

