import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h2>Main page</h2>
      <Link to="/posts">ПОСТЫ</Link>
      <br />
      <Link to="/about">О САЙТЕ</Link>
    </div>
  );
};

export default Main;
