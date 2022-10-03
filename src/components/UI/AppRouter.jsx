import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/route';
import Header from '../HeaderUs';
import { AuthContext } from '../../context';
import NavBar from './navbar/NavBar';

const AppRouter = () => {
  const { isAuth} = useContext(AuthContext);
  console.log(isAuth);
  return (
    isAuth
      ? (
        <BrowserRouter>
          <Header />
          <NavBar/>

          <Routes>
            {privateRoutes.map(privatRoutes => {
              const Component = privatRoutes.components;
              return (
                <Route
                  key={privatRoutes.path}
                  path={privatRoutes.path}
                  exact={privatRoutes.exact}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      )
      : (
        <BrowserRouter>
          <Routes>
            {publicRoutes.map(publicRoute => {
              const Component = publicRoute.components;
              return (
                <Route
                  key={publicRoute.path}
                  path={publicRoute.path}
                  exact={publicRoute.exact}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      )
  );
};

export default AppRouter;
