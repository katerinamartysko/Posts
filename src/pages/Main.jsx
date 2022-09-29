import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/UI/Button/myButton';
import { AuthContext } from '../context';

const Main = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
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
