import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <h1>
      ЭТО ПРИЛОЖЕНИЕ СОЗДАНО
      <br />
      <Link to="/posts">ПОСТЫ</Link>
    </h1>
  );
};

export default About;
