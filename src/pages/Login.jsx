import React, { useContext } from 'react';
import MyInput from '../components/UI/Input/myInput';
import MyButton from '../components/UI/Button/myButton';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', '1');
    navigate('/posts');
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>ВОЙТИ </MyButton>

      </form>
    </div>
  );
};

export default Login;
