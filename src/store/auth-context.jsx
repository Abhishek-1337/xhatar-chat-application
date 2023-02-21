import React, { useEffect, useState } from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from '../firebase';

export const AuthContext = React.createContext();    

export const AuthProviderContext = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});    
    useEffect(()=> {
        const unSub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        }); 

        return () => {
            unSub();
        }
    }, []);
    return (
        <AuthContext.Provider value = {{currentUser}}>
            {children}
        </AuthContext.Provider>     
    );
}
