/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Children, createContext, useState} from 'react';
import { loginAction } from '../Redux/Login/LoginAction';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoding] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const login = () => {
    setUserToken('hfghgjh');
    setIsLoding(false);
  };
    const logout = () => {
    setUserToken('null');
    setIsLoding(false);
  };
  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
