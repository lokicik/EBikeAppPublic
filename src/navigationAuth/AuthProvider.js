import { View, Text } from 'react-native'
import React, {useState, useEffect, createContext} from 'react'
import auth from '@react-native-firebase/auth'


export const AuthContext = createContext({});


export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
    value={{
      user,
      setUser,
      login:async(email, password) => {
        try {
          await auth().signInWithEmailAndPassword(email, password)
        } catch(error) {
            console.log(error);
            
          }
      },


      signUp:async(email, password) => {
        try {
          await auth().createUserWithEmailAndPassword(email, password)
        } catch(error) {
            console.log(error);
          }
      },
      resetPassword: async(email) =>{
          try {
            await auth().sendPasswordResetEmail(email)
            alert("Your password reset link has been sent to your email.")
          } catch(error) {
              console.log(error);
            }
        },
      signOut:async() => {
          try {
            await auth().signOut();
          } catch(error) {
              console.log(error);
            }
        },
      

    }}
    
    >{children}</AuthContext.Provider>
  )
};

