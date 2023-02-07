import Login from './Login';

import './styles.css';

const Home = () => {
  return (
        <div className="container">
            <div className="auth-banner-container">
                <h1>Avalie Filmes</h1>
                <p> Diga o que você achou do seu filme favorito.</p>
                {/* <AuthImage /> */}
            </div>
            <div>
              <Login />
            </div>
        </div>
  );
};

export default Home;
