import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../navigationAuth/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';



const SignUpScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext)

  const signUpValidationSchema = yup.object().shape({
    email: yup.string()
      .required('boş geçilemez')
      .email('geçerli bir email adresi giriniz'),
    password: yup.string()
      .required('boş geçilemez')
      .min(6, ({ min }) => 'şifre en az ' + min + 'karakter olmalidir!')
      .matches(/\w*[a-z]\w*/, 'En az 1 adet küçük harf kullanmalisiniz!')
      .matches(/\w*[A-Z]\w*/, 'En az 1 adet büyük harf kullanmalisiniz!')
      .matches(/\d/, 'En az 1 adet rakam kullanmalisiniz!')
      .matches(/[!@#$%^&*()\-_"=+{};:,<.>]/, 'En az 1 adet özel karakter kullanmalisiniz!'),

    passwordConfirm: yup.string()
      .required('boş geçilemez')
      .oneOf([yup.ref('password')],'şifreler uyumsuz'),



  });

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#FFF7D8' }}>
      <View style={{
        width: '80%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFD95A',
        borderRadius: 15
      }} >
        <Text style={{ fontSize: 26 }}> Yeni Üye Kaydı</Text>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{ email: '', password: '', passwordConfirm: '' }}
          onSubmit={values => { console.log(values), signUp(values.email, values.password) }}
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
                placeholder='Şifrenizi giriniz'
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

              <TextInput
                name="passwordConfirm"
                placeholder='Şifrenizi tekrar giriniz '
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

                onChangeText={handleChange('passwordConfirm')}
                onBlur={handleBlur('passwordConfirm')}
                value={values.passwordConfirm}
                keyboardType="email-address"
                secureTextEntry={true}
                

              />
              {errors.passwordConfirm && (
                <Text style={{ color: '#f00', fontSize: 14 }}>
                  {errors.passwordConfirm}
                </Text>
              )}




              <View style={{ width: '50%', borderRadius: 20 }} >

                <Button onPress={handleSubmit} title="Sign Up" disabled={!isValid} color={'#4C3D3D'} />
              </View>


            </View>
          )}


        </Formik>

      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen