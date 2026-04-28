import { createContext, useContext } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useLocalStorage('s11d2', {});
  const isLoggedIn = authInfo && authInfo.token;
  const history = useHistory();

  const initAuth = (authFormData) => {
    axios
      .post(
        'https://nextgen-project.onrender.com/api/s11d2/login',
        authFormData
      )
      .then((response) => {
        console.log('LOGIN', response);
        setAuthInfo(response.data);
        history.push('/friends');
      })
      .catch((error) => {
        console.error('LOGIN', error);
      });
  };

  const logOut = () => {
    setAuthInfo({});
    history.push('/login');
  };
  return (
    <AuthContext.Provider value={{ authInfo, initAuth, isLoggedIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
