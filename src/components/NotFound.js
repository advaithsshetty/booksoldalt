import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div className="page-not-found">
      <div className="content">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
