/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = (value)=>{
        signInWithPopup(auth,googleProvider);
    }

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = () =>{
        return signOut(auth);
    }


    const authInfo = {
        user,
        createUser,
        logout,
        login,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;