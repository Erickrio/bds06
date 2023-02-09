import {Switch ,Route, Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import MovieCatalog from './pages/Private/MovieCatalog';
import MovieDetails from './pages/Private/MovieDetails';
import history from './util/history';

const Routes = () => (
  <Router history={history}> 
  <Navbar />
  <Switch>
      <Route path="/" exact> {/* Liberado rota raiz */}
          <Home />
      </Route>
      <PrivateRoute path="/movies"> {/* Precisa esta logado */}
        <Route path="/movies" exact >
           <MovieCatalog /> 
        </Route >
      <Route path="/movies/:movieId">
           <MovieDetails />
      </Route>
      </PrivateRoute>
  </Switch>
</Router>
);

export default Routes;
