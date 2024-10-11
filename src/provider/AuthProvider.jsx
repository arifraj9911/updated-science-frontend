import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import { app } from "../firebase/Firebase.config";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// console.log("Firebase Auth Object:", auth);

// google provider
const googleProvider = new GoogleAuthProvider();

// facebook provider
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   create user with email and pw
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user with email and pw
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logOutUser = () => {
    return signOut(auth);
  };

  // google related
  // sign in / sign up
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // facebook related
  const facebookSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    logOutUser,
    googleSignin,
    facebookSignin,
    user,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
