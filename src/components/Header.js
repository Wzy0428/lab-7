import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Zhiying's Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ marginLeft: 'auto', marginRight: '40px' }}> 
              <li className="nav-item" style={{ margin: '10px' }}>
                <Link className="nav-link active" to="/" aria-label="Go to Home page">Home</Link>
              </li>
              <li className="nav-item " style={{ margin: '10px' }}>
                <Link className="nav-link" to="/about" aria-label="Go to About page">About</Link>
              </li>
              <li className="nav-item" style={{ margin: '10px' }}>
                <Link className="nav-link" to="/projects" aria-label="Go to Projects page">Projects</Link>
              </li>
              <li className="nav-item" style={{ margin: '10px' }}>
                <Link className="nav-link" to="/skills" aria-label="Go to Skills page">Skills</Link> {/* Link to Skills */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
