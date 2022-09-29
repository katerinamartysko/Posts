import React, { useState } from 'react';
import './styles/App.css';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context';

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
