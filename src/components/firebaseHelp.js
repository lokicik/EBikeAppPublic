import { View, Text } from 'react-native'
import React, {useState, useEffect, createContext} from 'react'

import app from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';


 

import db from './firebaseConfig';

export const getPosts = async () => {
  try {
    //doc name is your's firebase storage document ıd 
    const userDocument = await db.collection('users').doc('--- YOUR DOCUMENT ID').get();
    const data = await userDocument.data()
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};



   
  


