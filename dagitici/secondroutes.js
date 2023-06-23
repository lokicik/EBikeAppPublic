import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from '../src/navigationAuth/AuthProvider'
import React, {useState, useEffect, useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Loading from '../src/components/Loading'
import AuthStack from '../src/navigationAuth/AuthStack'


const SecondRoutes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [isLoading, setisLoading] = useState(true);
    const [isInitial, setisInitial] = useState(true);

    function onAuthStateChanged(user) {
        setUser(user);
        if(isInitial) setisInitial(false);
        setisLoading(false);
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;

    }, []);
    if(isLoading) {
        return <Loading/>;
    }



  return (
    <NavigationContainer>
        {user ? <Routes /> : <AuthStack /> }
    </NavigationContainer>
    
  )
}

export default SecondRoutes