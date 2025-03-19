import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container text-center my-5">
        <h1 className="display-2" aria-live="polite">404</h1>
        <p className="lead">Page Not Found</p>
        <Link to="/" className="btn btn-primary" aria-label="Go back to the home page">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
