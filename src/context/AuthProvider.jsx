import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
    const unsubscribe  =  onAuthStateChanged(auth, currentUser =>{
            console.log('observer', currentUser);
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe()
        }

    }, []);

    const authInfo ={
        user,
        createUser,
        signUser,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;