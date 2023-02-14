import React, {createContext, useState} from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(null);
  const login = () => {
    setIsLogin('');
  };

  return (
    <AuthContext.Provider value={{login, isLogin}}>
      {children}
    </AuthContext.Provider>
  );
};
