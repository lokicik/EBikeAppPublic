import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NotificationsScreen({ navigation }) {
    return (
  
      <SafeAreaView>
        <View>
          <Text style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center', top: 25, fontSize: 20 }}>Notifications</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
          }
  
  
          }><Ionicons name='arrow-back' size={36} style={{ marginLeft: 30, borderRadius: 10, marginTop: 0, marginRight: 8, backgroundColor: '#ccc', width: 36 }} /></TouchableOpacity>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }} />
        </View>
  
  
  
        <View style={{ alignItems: 'center', textAlign: 'center' }}>
          <Text>No New Notifications!</Text>
  
        </View>
      </SafeAreaView>
  
  
    );
  }

const styles = StyleSheet.create({})