import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';

const Navbar = () => {
 
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
