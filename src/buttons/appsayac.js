import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Button, TouchableHighlight, Image, ImageSource, Header, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../style'
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Boton from './headlight';
import { StickyHeaderScrollView } from 'react-native-simple-sticky-header';
import selectionMode from './headlight';
import '../../boş/insallah'
import App from '../../boş/insallah';
import { ShadowedView } from 'react-native-fast-shadow';
import {useNavigation} from '@react-navigation/native'
import GoToButton from './GoToButton';
import {NotificationsScreen} from '../../dagitici/routes'
import HeaderComponent from '../../boş/NewDravenComponent';




const SayacScreen = ({navigation}) => {
  const [sayi, setSayi] = useState(1);
  var eBikePhoto = require('../../assets/ebikephoto.jpg');
  
  

//bisikletin bağlı olduğu süreyi ölçmek
//

  return (
    <SafeAreaView>
      <View style={{ bottom: 200, flex: 1, alignItems: "center", backgroundColor: '#FAF8FA',marginTop:-60 }}>
      <View style={{flexDirection:'row',top:60,padding:20}}>
        <Text style={{ flex: 1, left: 0, right: 0, bottom: 0, top: 220, fontSize: 20, fontWeight: "800",color:'#181618'}}>Welcome Draven Draven</Text>
        
        <GoToButton />
        
       
      
      
      </View>
        
        <View style={{ top: 280, right: 120 }}  >
          <View >
            <Text style={{ fontSize: 44, fontWeight: "800", color:'#181618' }}>%100</Text>
            <Text style={{ fontSize: 20, fontWeight: "400" , color:'#181618'  }}  >Battery Level</Text>
          </View>
          <View style={{ top: 50 }} >
            <Text style={{ fontSize: 44, fontWeight: "800", color:'#181618'  }}  >32.64</Text>
            <Text style={{ fontSize: 20, fontWeight: "400", color:'#181618'  }} >Speed(mile/h)</Text>
          </View>
        </View>





        <View style={{ top: 100, left: 80 }}>
          <Image style={{ width: 250, height: 250,}} source={eBikePhoto} />
          
        </View>
        
        

        
        <View style={{ bottom: 60,}}  >
      

          <TouchableOpacity style={{ top: 200, right: 80 }}  >
            <View style={{ borderColor: '#BDBDBD', borderWidth: 0.3, borderRadius: 10, width: 60, height: 50 }}>
              <Boton></Boton>
              
              
              
              
              
            </View>
          </TouchableOpacity >
          

          <View style={{ left: 50 }}>
            <TouchableOpacity
              onPress={() => {
                if (sayi > 1) {
                  setSayi(sayi - 1)
                }
                else if (sayi <= 0) { ; }
                console.log(sayi)
              }}

              style={{
                backgroundColor: "#2E8A59",

                width: 50,
                borderRadius: 15,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 150,
                marginTop: 100,
                position: 'relative',
                top: 50,
                right: 30

              }}>
              <Text style={{ fontSize: 64, color:'#181618' , textAlign: 'center', justifyContent: 'center', bottom: 20, width: '110%' }}>
                -
              </Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 36, color:'#181618',fontWeight:800 }}>     Level {sayi}</Text>

            <TouchableOpacity
              onPress={() => {
                setSayi(sayi + 1);
                console.log(sayi)

              }}

              style={{
                backgroundColor: "#2E8A59",

                width: 50,
                borderRadius: 15,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 50,
                marginLeft: 150,
                left: 30
              }}>
              <Text style={{ fontSize: 48, color: '#fff', textAlign: 'center', justifyContent: 'center', bottom: 9 }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>   
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15,alignItems:'space-between',padding:20,bottom:300}}>
        <TouchableOpacity><View style={{borderRadius:10,borderWidth:0.2,borderTopWidth:0.2,paddingBottom:10,paddingLeft:15,paddingRight:15,paddingTop:10}}><Text style={{fontSize:14,fontWeight:500}}>single mileage</Text><Text style={{fontSize:12,fontWeight:200}}>(mileage)</Text><Text style={{fontWeight:500,fontSize:24}}>0</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={{borderRadius:10,borderWidth:0.2,borderTopWidth:0.2,paddingBottom:10,paddingLeft:15,paddingRight:45,paddingTop:10}}><Text style={{fontSize:14,fontWeight:500}}>Ridetime</Text><Text style={{fontSize:12,fontWeight:200}}>(s)</Text><Text style={{fontWeight:500,fontSize:24}}>0</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={{borderRadius:10,borderWidth:0.2,borderTopWidth:0.2,paddingBottom:10,paddingLeft:15,paddingRight:45,paddingTop:10}}><Text style={{fontSize:14,fontWeight:500}}>Total Mile</Text><Text style={{fontSize:12,fontWeight:200}}>(mile)</Text><Text style={{fontWeight:500,fontSize:24}}>5.4</Text></View></TouchableOpacity>
      </View>
      
      
      
      <View style={{bottom:130}}> 
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15,alignItems:'space-between',padding:10,bottom:200}}>
          <Text style={{fontSize:20,fontWeight:800,marginLeft:10}}>Quick Control</Text>
          <TouchableOpacity>
            <Text style={{color:'#0aada8'}}>See More {'>'} </Text>
          </TouchableOpacity>
        </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15,alignItems:'space-between',paddingRight:40,padding:20,bottom:240}}>
        <TouchableOpacity><View style={{borderRadius:10,borderWidth:0.2,borderTopWidth:0.2,paddingBottom:80,paddingLeft:20,paddingRight:30,paddingTop:20}}><Text style={{fontSize:16,fontWeight:500}}>Unit Set</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={{borderRadius:10,borderWidth:0.2,borderTopWidth:0.2,paddingBottom:80,paddingLeft:20,paddingRight:40,paddingTop:20}}><Text style={{fontSize:16,fontWeight:500}}>Cruise</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={{borderRadius:10,borderWidth:0.2,borderTopWidth:0.2,paddingBottom:80,paddingLeft:15,paddingRight:12,paddingTop:20}}><Text style={{fontSize:16,fontWeight:500}}>Start Mode</Text></View></TouchableOpacity>
      </View>
      </View>

      <View style={{bottom:360}}>
      <Text style={{marginLeft:20,marginBottom:20,fontSize:20,fontWeight:800}}>Riding Record</Text>
      <TouchableOpacity>        
      <View style={{padding:30,marginHorizontal:20,borderRadius:10,elevation:1,}}>
        
          
          <Text>No cycling record</Text>
          <Text style={{fontWeight:200}}>Start your first ride.</Text>
        
      </View>
      </TouchableOpacity> 
      </View>         
    </SafeAreaView>
  );
};


export default SayacScreen