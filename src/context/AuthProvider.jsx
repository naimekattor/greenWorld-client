import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, FacebookAuthProvider, GoogleAuthProvider, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // console.log(user);
  // console.log(user?.displayName);


  useEffect(() => {
    const state = onAuthStateChanged(auth
      , (currentUser) => { setUser(currentUser) })
    return () => {
      state();
    }
  }, [])
  // Register user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // handle Signin
  const userSignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // handle logout
  const logOut = () => {
    return signOut(auth).then(() => {
      // console.log('signout successful');

    }).catch((error) => {
      // console.log(error);

    });
  }

  // sign in with google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }
  // sign in with facebook
  const facebookSignIn = () => {
    return signInWithPopup(auth, FacebookProvider);
  }
  // update user profile
  const updateUser = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    });
  }
  // send Password Reset Email
  const passwordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  }
  const userInfo = {
    user,
    setUser,
    createUser,
    logOut,
    userSignin,
    googleSignIn,
    facebookSignIn,
    updateUser,
    passwordResetEmail
  }
  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider
