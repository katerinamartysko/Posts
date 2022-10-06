import React, { useState } from 'react';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context';
import './styles/App.css';

const App = () => {
  const auth = localStorage.getItem('auth');
  const [isAuth, setIsAuth] = useState(Number(auth));

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }}
    >
      <AppRouter />
    </AuthContext.Provider>

  );
};

export default App;
