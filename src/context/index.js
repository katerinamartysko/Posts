import { createContext } from 'react';

const authContext = {
  isAuth: false,
  setIsAuth: () => undefined
};

export const AuthContext = createContext(authContext);
