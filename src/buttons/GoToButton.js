import * as React from 'react';
import { Button, TouchableOpacity, Text, View,Image } from 'react-native';
import SayacScreen from './appsayac';
import AnaSayfa from '../Screens/homescreen';
import NotificationsScreen from '../../dagitici/routes'
function GoToButton({ navigation  }) {
  return (
    <TouchableOpacity
      title='Button'
      onPress={() => navigation.openDrawer()}
    ><Image style={{top:200,borderRadius:50}} source={require('../../assets/userprofile.jpg')}/>
    </TouchableOpacity>
  );
}
export default GoToButton