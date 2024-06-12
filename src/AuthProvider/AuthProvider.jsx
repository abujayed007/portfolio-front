/* eslint-disable react/prop-types */
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const googleLogin =(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    
    const logOut = ()=>{
        return signOut(auth).then(()=>setUser(null))
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            console.log(currentUser);
            }else{
                setLoading(false)
            }
           
        })
        return unsubscribe
    },[])
    const userInfo ={
        user,
        loading,
        createUser,
        logIn,
        googleLogin,
        logOut

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;