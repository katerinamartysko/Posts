import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <h1>ПРОИЗОШЛА ОШИБКА
      <br/>
  <Link to="/posts">ВЕРНИТЕСЬ К ПОСТАМ </Link>
    </h1>

);
};

export default Error;
