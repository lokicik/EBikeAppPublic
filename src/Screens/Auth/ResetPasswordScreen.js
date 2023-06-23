import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../navigationAuth/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';





const ResetPasswordScreen = ({ navigation }) => {
  const { resetPassword } = useContext(AuthContext)

  const loginValidationSchema = yup.object().shape({
    email: yup.string()
      .required('boş geçilemez')
      .email('geçerli bir email adresi giriniz'),
    


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
        <Text style={{ fontSize: 26 }}> Şifre Yenileme</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: ''}}
          onSubmit={values => { console.log(values), resetPassword(values.email) }}
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


             




              <View style={{ width: '50%', borderRadius: 20 }} >

                <Button onPress={handleSubmit} title="Sifirla" disabled={!isValid} color={'#4C3D3D'} />
              </View>


            </View>
          )}


        </Formik>

      </View>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen