import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default Loading = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <ActivityIndicator size='large' color='#00f'/>
    </View>
  )
}

