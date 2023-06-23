import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomBtn = ({
    onpress = () => { },
    BtnStyle = {},
    btnText
}) => {
  return (
    <View>
      <TouchableOpacity
      onPress={onpress}
      style={{...styles.BtnStyle,...BtnStyle}}
      >
        <Text>{btnText}</Text>

      </TouchableOpacity>
    </View>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    BtnStyle:{
        height:48,
        justifyContent:'center',
        backgroundColor:'white',
        paddingHortizonal:16,
        borderWidth:1
    }

})