import React, { useEffect, useState } from 'react'
import initializeAppAuthentication from './Firebase.init'
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut  } from "firebase/auth";

initializeAppAuthentication()
const UseFirebase=()=>{
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
        });
    }, [])
    return{
        user,
        signInWithGoogle,
        logOut
    }
}

export default UseFirebase
