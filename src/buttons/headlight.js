import React, { useState } from 'react';
import { Alert, View, TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { showMessage } from 'react-native-flash-message';
import styles from '../../style';

const Boton = () => {
  const [estado, setEstado] = useState(false);
  const [bgColor, setBgColor] = useState('#fff');
  const [iconColor, setIconColor] = useState('#000');
  const [textColor, setTextColor] = useState('#181618');

  const showSuccess = () => { showMessage({ message: "Headlight on", type: "success", icon: "success", }) };
  const showError = () => { showMessage({ message: "Headlight off", type: "danger", icon: "danger", }) };

  const isikDurumu = () => {
    if(estado){
      showError()
      setBgColor('#fff');
      setIconColor('#000');
      setTextColor('#181618');
    }
    else{
      showSuccess()
      setBgColor('#2E8A59');
      setIconColor('#fff');
      setTextColor('#fff');
    }
    setEstado(!estado);
  };
  
  return (
    <View style={{width:65,height:50, }}>
      <TouchableOpacity 
        onPress={() => isikDurumu()}
        style={{backgroundColor: bgColor, borderRadius: 10,borderWidth:1}}>
        <Ionicons 
          style={{left: 18, justifyContent: 'center', alignItems: 'center'}}
          name={estado ? 'flashlight' : 'flashlight-outline'}
          size={30}
          color={iconColor}
        />
        <Text style={{ justifyContent: 'center', textAlign: 'center', fontSize: 12, color: textColor }}>Headlight</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Boton;
