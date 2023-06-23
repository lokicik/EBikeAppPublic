import { View, Text, Image, TouchableOpacity, Button, SafeAreaView, Switch, StyleSheet } from 'react-native';
import React, { useEffect,useContext,useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { DataContext } from '../components/firebaseHelp';
import { getPosts, liste, veri } from '../components/firebaseHelp';
import app from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';




function ProfileScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
    
  }, [])

  console.log('Name çalıtı',posts)
  // const [db,setDb] = useState([])
  // useEffect(() => {
  //   const fetchData = async () =>{
       

  //       const userDocument = await  firestore().collection('users').doc('Bwa4eNBf9UdB1xY9HnyYuxm3mcV2').get();
        
  //       const veriler = await userDocument.data()

  //       setDb(veriler)
  //       console.log('amk verileri nerdesin',veriler)
  //     };
  //     fetchData();
    
  // }, [])
  

  // console.log('Name çalıtı',db)
  
  // const GelenVeriler = veri()
  // const GelenVeri = GelenVeriler
  
    return (
  
      <SafeAreaView style={{position:'relative',flex:1,backgroundColor:'#fff'}} >

        <View style={{flex:5.1, }}>
        <TouchableOpacity style={{
          borderRadius: 10, marginTop: 10, marginRight: 8, backgroundColor: '#2E8A59', width: 36,
        }}
  
          onPress={() => {
  
            navigation.navigate('AnaSayfa')
              // console.log('gelen veriler burada listelenmiştir:',db.name)
            // console.log('Profile screen back button onpress==>>>',posts.name)
          }}>
          <Ionicons
            name={'arrow-back'} size={35} color={'#000'} />
        </TouchableOpacity>
  
        <Text style={{color:'green' ,textAlign: 'center', justifyContent: 'center', fontSize: 24,  width: '30%', position: 'absolute', left: '35%' }}>
          My Profile
        </Text>
        
        
        </View>
        <View style={{ alignItems: 'center', left: '35%', width: '30%' }}>
          <Image style={{ borderRadius: 100, width: 105, height: 105, }} source={require('../../assets/userprofile.jpg')} />
        
            
            
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'green',fontSize:36}}>{posts.name} </Text>
              <Text style={{color:'green',fontSize:36}}>{posts.surname} </Text>
            </View>
            
            
          </View>
        
        {/* Bilgi kısmı main flex */}
        <View style={{ marginLeft:30,marginRight:30,marginBottom:30,padding:20,flex:40, backgroundColor:"#2E8A59",borderRadius:50}}>
        
  
        
          <View style={{ margin: 10,flex:1 }}>
            <Text style={styleProfile.profileTitle} >Gender</Text>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }} />
            <Text style={styleProfile.profileText}  >{posts.Gender} </Text>
          </View>
  
          <View style={{ margin: 10, flex:1 }}>
            <Text style={styleProfile.profileTitle}>Weight</Text>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }} />
            <Text style={styleProfile.profileText}>{posts.weight} </Text>
          </View>
  
          <View style={{ margin: 10,flex:1 }}>
            <Text style={styleProfile.profileTitle}>Height</Text>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }} />
            <Text style={styleProfile.profileText}>{posts.height} </Text>
          </View>
  
          <View style={{ margin: 10,flex:1 }}>
            <Text style={styleProfile.profileTitle}>Country</Text>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }} />
            <Text style={styleProfile.profileText}>{posts.country} </Text>
          </View>
          <View style={{ margin: 10, flex:1 }}>
            <Text style={styleProfile.profileTitle}>City</Text>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }} />
            <Text style={styleProfile.profileText}>{posts.city} </Text>
          </View>
  
        </View>
      </SafeAreaView>
    );
  
  }
export default ProfileScreen

const styleProfile = StyleSheet.create({
  profileTitle:{
    color: '#fff', 
    fontWeight: 600, 
    bottom: 5,
    fontSize:20
  },
  profileText:{
    color: '#FFB84C', 
    fontWeight: 600, 
    bottom: 5,
    fontSize:20
  },

})