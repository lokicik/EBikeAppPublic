import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../navigationAuth/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';



const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  

  function onAuthStateChanged(user) {
    setUser(user);
    

  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  


  const { login } = useContext(AuthContext)

  const loginValidationSchema = yup.object().shape({
    email: yup.string()
      .required('boş geçilemez')
      .email('geçerli bir email adresi giriniz'),
    password: yup.string()
      .required('boş geçilemez')
      .min(6, ({ min }) => 'şifre en az ' + min + 'karakter olmalidir!'),


  });

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#FFF7D8'}}>
      <View style={{
        width: '80%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFD95A',
        borderRadius: 15
      }} >
        <Text style={{ fontSize: 26 }}> Üye Girişi</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={values => {
            console.log(values), login(values.email, values.password),
              user ? navigation.navigate('MyDrawer') : navigation.navigate('LoginScreen')
          }}
        >

          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
            <View style={{ width: '100%', alignItems: 'center' }}>

              <TextInput
                name="email"
                placeholder='Email Adresiniz'
                style={{
                  height: 50,
                  width: '90%',
                  paddingVertical: 10,
                  paddingLeft: 15,
                  margin: 17,
                  borderColor: '#bbb',
                  borderWidth: 1,
                  borderRadius: 10
                }}

                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"

              />

              {/* <ErrorMessage name="email" /> */}
              {errors.email && (
                <Text style={{ color: '#f00', fontSize: 14 }}>
                  {errors.email}
                </Text>
              )}


              <TextInput
                name="password"
                placeholder='Şifrenizi giriniz 123'
                style={{
                  height: 50,
                  width: '90%',
                  paddingVertical: 10,
                  paddingLeft: 15,
                  margin: 15,
                  borderColor: '#bbb',
                  borderWidth: 1,
                  borderRadius: 10
                }}

                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                keyboardType="email-address"
                secureTextEntry={true}

              />
              {errors.password && (
                <Text style={{ color: '#f00', fontSize: 14 }}>
                  {errors.password}
                </Text>
              )}




              <View style={{ width: '50%', borderRadius: 20 }} >

                <Button onPress={handleSubmit} title="Submit" disabled={!isValid} color={'#4C3D3D'} />
              </View>


            </View>
          )}


        </Formik>

      </View>
      <View>
        {/* <TouchableOpacity onPress={console.log('merhabafjkdsgldfg')}> </TouchableOpacity> */}
      
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen