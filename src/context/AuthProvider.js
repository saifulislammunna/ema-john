import React from 'react';
import useFirebase from '../hooks/useFirebase';
import { createContext } from 'react';

export const AuthContext  = createContext();


const AuthProvider = ({children}) => {
  /* const {children} = props; */
  const allContexts =  useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;