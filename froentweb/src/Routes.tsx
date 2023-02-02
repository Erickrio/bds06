import {Switch ,Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Admin/Auth/Login';

const Routes = () => (
  <BrowserRouter > 
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            {/* <Redirect from="/admin/auth" to="/admin/auth/login" exact /> */}
        </Switch>
  </BrowserRouter>
);

export default Routes;
