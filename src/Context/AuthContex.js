import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config'

export const UserContext = createContext();


const AuthContext = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const auth = getAuth(app)
    const [user , setUser] = useState('Moti')
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signIn = (email , password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }
    const updateFullProfile = (information) => {
        setLoading(true)

      return  updateProfile(auth.currentUser ,information )
    }
    const passwordReset = ( email) => {
        return sendPasswordResetEmail(auth , email)
    }
    // observer
    useEffect(() => {
          const unsubscribe =    onAuthStateChanged(auth , currentUser => {
              setUser(currentUser)
              setLoading(false)
             })
            return () => unsubscribe()
    },[])
    const authInfo = {signup ,signIn , user , logOut  , loading , passwordReset , updateFullProfile}
    return (
        <UserContext.Provider value={authInfo}>
           {children}
        </UserContext.Provider >
    );
};

export default AuthContext;