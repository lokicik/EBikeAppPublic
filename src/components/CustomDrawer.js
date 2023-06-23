import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import * as React from 'react';
import { useContext, useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { ImageBackground } from 'react-native'
import IconFa from 'react-native-vector-icons/FontAwesome5'
import IconIo from 'react-native-vector-icons/Ionicons'
import IconOc from 'react-native-vector-icons/Octicons'

import { AuthContext } from '../../src/navigationAuth/AuthProvider';
import auth from '@react-native-firebase/auth';
import { getPosts } from './firebaseHelp';
import Weather from './Weather';



const CustomDrawer = (props) => {
  // gün,ay,yıl için liste
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];
  const date = new Date().getUTCDate();
  const month = new Date().getUTCMonth() + 1;
  const year = new Date().getUTCFullYear();




  const [veri, setVeri] = useState([]);
  useEffect(() => {
    const fetchVeri = async () => {
      const data = await getPosts();
      setVeri(data);
    };
    fetchVeri();
    
  }, [])
  
  // çıkış yap fonksiyonu
  const { signOut } = useContext(AuthContext)


// user kontrolü
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitial, setIsInitial] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (isInitial) setIsInitial(false);
    setIsLoading(false);

  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (isLoading) {
    return <Loading />;
  }



  return (
    <View style={{ flex: 1, backgroundColor: '#F9F8F9' }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#F9F8F9' }}>
        <ImageBackground source={require('../../assets/12.jpg')} style={{ padding: 20 }}>
          <View>
            <View style={{ flexDirection: 'row', }}>
              <Image source={require('../../assets/userprofile.jpg')}
                style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
              <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                <Text style={{ color: '#F9F8F9', fontSize: 18, marginBottom: 5 }}  >{veri.username}</Text>
                <Text style={{ color: '#fff', fontSize: 18, marginBottom: 5 }}  >A Rh-</Text>
                <Text style={{ color: '#fff', fontSize: 18, marginBottom: 5 }}  >4444444</Text>

              </View>
            </View>

            <View style={{ flexDirection: 'row', }}>
              <IconFa name="bicycle" size={20} color='#fff' />
              <Text style={{ color: '#fff', fontSize: 16, }}  > A bike driver/scooterist</Text>
            </View>

          </View>
        </ImageBackground>
        
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
        <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#F9F8F9' }} />
      </DrawerContentScrollView>
       {/* weather görüntülek için viewler */}
       
       <View style={styles.mainContentTop}>
       
              {/* Main top content left */}
              <View style={styles.mainContentTopleft}>
                
                  <Text style={styles.textStyleMainContent}>{dayName}</Text>
                  <Text style={styles.textStyleMainContent}>{date}/{month}/{year}</Text>
               
              </View>
              {/* Main top content ringht charing icon*/}
              <View style={styles.mainContentTopRight}>
              
                <Weather />
                
              </View>
            
       </View>


      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#F9F8F9' }}>

        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15, }} >
          <View style={{ flexDirection: 'row', marginLeft: 0 }}>
            <IconIo name='share-social-outline' size={22} color={'#181618'} />
            <Text style={{ marginLeft: 10, fontWeight: 700, color: '#181618' }}>Share your stats</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity

        
        //props.yol Mydrawer üzrinden navigation parametresini alabilmek için kullanıldı bu sayfaya normla yoldan navigation eklenemiyor.

         onPress={() => {user ? (signOut(), props.yol.navigate('LoginScreen')) : props.yol.navigate('MyDrawer') }} style={{ paddingVertical: 15, }}
          >
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <IconOc name='sign-out' size={22} color={'#181618'} />
            <Text style={{ marginLeft: 10, fontWeight: 700, color: '#181618' }}>Sign out</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  mainContentTopRight: {
    flex: 5,
    borderRadius: 60,

    alignContent: 'center',
    justifyContent: 'center',
  },
  mainContentTop: {
    flexDirection: 'row',
    flex: 0.2,
    backgroundColor: '#2E8A59',
    borderRadius: 30,
    marginHorizontal: '5%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  mainContentTopleft: {
    flex: 4.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyleMainContent: {
    fontSize: 18,
    paddingLeft: 22,
    textAlign: 'left',
    color: 'white',
    fontWeight:'bold'

  },


})