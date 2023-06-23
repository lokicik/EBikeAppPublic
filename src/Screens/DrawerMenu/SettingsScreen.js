import React, { useContext, useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, TouchableOpacity, SafeAreaView, StyleSheet, Switch, } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import app from '@react-native-firebase/app';
import IconOc from 'react-native-vector-icons/Octicons'
import PermissionsScreen from '../Info/PermissionsScreen';
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {veri} from '../../components/firebaseHelp';
import DarkModeSheet from '../../buttons/DarkModeSheet';
import TempUnitSheet from '../../buttons/TempUnitSheet';
import LanguageSheet from '../../buttons/LanguageSheet';
import UnitSetSheet from '../../buttons/UnitSetSheet';
import DenemScreen from '../Info/DenemScreen';
import { AuthContext } from '../../navigationAuth/AuthProvider';
// const cagri = new Promise(  (resolve,reject)=>{
//   const veriGeldiMi =  firestore().collection('users').get();
//   if(veriGeldiMi){
//     resolve('veri geldi')
//   }
//   else{
//     reject('veri gelmedi')
//   }
// });


const SettingScreen = ({navigation}) => {
  // çıkış yap fonksiyonu
  const { signOut } = useContext(AuthContext)


// user kontrolü
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitial, setIsInitial] = useState(true);


  // const liste = veri()
  
  return (



    <SafeAreaView style={styles.settingContainer}>
      {/* Header */}
      <View style={styles.header}>
        {/* Drawer açmak için ikon */}
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => { navigation.goBack() }
          }>

          <Ionicons name={'arrow-back'} size={35} color={'black'} />

        </TouchableOpacity>


        {/* sayfa başlığı */}
        <Text style={styles.headerText} >Settings</Text>
        
        
      </View>
      <View style={styles.main0}>
            <Button title='Personal Information' color={'red'} onPress={() => {navigation.navigate('Personalinfo')}}/>
      </View>

      {/* Main */}
      <View style={styles.main}>
        
        <View style={{backgroundColor:'#2E8A59', borderRadius:50,width:'90%',padding:25}}>
          
          <View style={{marginTop:10,}}>
              <LanguageSheet/>
          </View>
          
          <View style={{ marginTop:10,}}>
          

            <DarkModeSheet/>
          
          </View>
          
          <View style={{ marginTop:10}}>
          

            <TempUnitSheet/>
          
          </View>
          <View style={{marginTop:10,}}>
            
            <UnitSetSheet/>
            
          </View>
          
          
        </View>
        
      </View>



      {/* Footer */}
      <View style={styles.footer}>
      <View style={{ width:'100%', alignItems:'center',marginBottom:15}}>
        <View style={{width:'50%'}}>

          <Button title="FAQ" onPress={() => {navigation.navigate('FAQ')}} />
        </View>

        <View style={{width:'50%',marginTop:5}}>
    
          <Button title="Permissions" onPress={() => {navigation.navigate('Permissions')}}/>
 
        </View>
      </View>
        
      <TouchableOpacity

        
//props.yol Mydrawer üzrinden navigation parametresini alabilmek için kullanıldı bu sayfaya normla yoldan navigation eklenemiyor.

 onPress={() => {user ? (signOut(), navigation.navigate('LoginScreen')) : navigation.navigate('MyDrawer') }} style={{ paddingVertical: 15, }}
  >
  <View style={{ flexDirection: 'row', marginLeft: 5 }}>
    <IconOc name='sign-out' size={22} color={'#181618'} />
    <Text style={{ marginLeft: 10, fontWeight: 700, color: '#181618' }}>Sign out</Text>
  </View>
</TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  settingContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  
  header: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#2E8A59'
  },

  headerIcon: {
    width: 36,
    borderRadius: 10,
    marginTop: 15,
    marginRight: 8,
    marginLeft: 10,
    backgroundColor: 'yellow'
  },
  headerText:{
    fontWeight:'500',
    fontSize:36,
    color:'#000',
    borderRadius: 10,
    marginTop: 8,
    marginRight: 8,
    marginLeft: 5,
    
  },
  main0:{
    backgroundColor:'#fff'
  },
  main: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  mainText: {
    
    fontSize: 30,
    color: '#fff'
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E8A59'
  },
 
})
