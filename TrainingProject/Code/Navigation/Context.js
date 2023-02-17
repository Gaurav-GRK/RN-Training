import React,{createContext, useState} from "react";

export const AuthContext=createContext()
export  const AuthProvider =({children})=>{
    
    const[isLogin,setIsLogin]=useState(null)
    const login =()=>{
        setIsLogin(true);
       
    }
    const logout = ()=>{
        setIsLogin(null)
       
    }
    return(
        <AuthContext.Provider value={{login,logout,isLogin}}>
            {children}
        </AuthContext.Provider>
    )
}