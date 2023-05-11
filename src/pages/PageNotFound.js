import React from 'react';
import './styledPageNotFound.scss'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="styledNotFound">
      <h1>Oops! You might be lost</h1>

      <img src={require('../assets/error.png')} alt="404 error" />
      <p>This path leads only to the dark side...</p>
      <Link to="/">Use teleport</Link>
    </div>
  );
}

export default PageNotFound;
