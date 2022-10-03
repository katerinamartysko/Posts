import React, { useContext } from 'react';
import MyButton from '../Button/myButton';
import { AuthContext } from '../../../context';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginOut = () => {
    setIsAuth(false);
    localStorage.setItem('auth', '0');
    navigate('/login');
  };
  return (
    <div className="goOut"><MyButton onClick={loginOut}>
      ВЫЙТИ
    </MyButton>
    </div>
  );
};

export default NavBar;
