import NewsContainer from './components/contenedornoticias'
import './App.css'

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mi Blog</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenedor principal */}
      <div className="container">
        <h1>Mi Blog de Noticias</h1>
        <NewsContainer />
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Mi Blog. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
