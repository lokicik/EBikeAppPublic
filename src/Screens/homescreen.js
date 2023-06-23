
import React, { useContext, useState, useEffect, } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeadBoton from '../buttons/headlight';
import selectionMode from '../buttons/headlight';
import { AuthContext } from '../../src/navigationAuth/AuthProvider';
import auth from '@react-native-firebase/auth';
import { getPosts } from '../components/firebaseHelp';

const AnaSayfa = ({ navigation }) => {
  const handleDecrease = () => {
    if (sayi > 1) {
      setSayi(sayi - 1);
    }
  };

  const handleIncrease = () => {
    if (sayi < 3) {
      setSayi(sayi + 1);
    }
  };

  let backgroundColor = 'white'; // default background color
  if (sayi === 1) {
    backgroundColor = 'red'; // change background color to red when sayi is 1
  } else if (sayi === 2) {
    backgroundColor = 'green'; // change background color to green when sayi is 2
  } else if (sayi === 3) {
    backgroundColor = 'blue'; // change background color to blue when sayi is 3
  }

  let levelTextColor = 'black'; // set default color to black

  if (sayi === 3) {
    levelTextColor = 'white'; // set color to red if sayi is 3
  }



  //veritabanından veri çekmek için 
  const [veri, setVeri] = useState([]);
  useEffect(() => {
    const fetchVeri = async () => {
      const data = await getPosts();
      setVeri(data);
    };
    fetchVeri();

  }, [])




  const { signout } = useContext(AuthContext)
  const [sayi, setSayi] = useState(1);
  var eBikePhoto = require('../../assets/ebikephoto.jpg');


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

  //bisikletin bağlı olduğu süreyi ölçmek
  //

  return (

    <SafeAreaView style={{ backgroundColor: '#F9F8F9', flex: 1 }}>



      {/* Header Viewi */}
      <View style={{ flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
        <TouchableOpacity

          onPress={() => {

            navigation.openDrawer()
            // console.log('gelen veriler burada listelenmiştir:',db.name)
          }}>

          <Ionicons style={{ borderRadius: 10, marginTop: 10, marginRight: 8, backgroundColor: '#ccc' }} name={'menu-sharp'} size={35} color={'black'} />
        </TouchableOpacity>

        <Text style={{ fontSize: 24, fontWeight: "800", color: '#181618', paddingTop: 10 }}>Welcome {veri.username}</Text>

        {/* ana sayfa sağ üstte bulunan profil resmi */}
        <TouchableOpacity onPress={() => {
          { navigation.navigate('Profile') }
        }}>
          <Image style={{ borderRadius: 50, }} source={require('../../assets/userprofile.jpg')} />
        </TouchableOpacity>

      </View>

      {/* Main */}
      <View style={{ flex: 7 }}>

        <View style={{ flex: 4, paddingLeft: 20 }}>
          {/* battery level kısmı */}

          <View >
            <Text style={{ fontSize: 44, fontWeight: "800", color: '#181618' }}>%100</Text>
            <Text style={{ fontSize: 20, fontWeight: "400", color: '#181618' }}  >Battery Level</Text>
          </View>
          <View style={{ top: 50 }} >
            <Text style={{ fontSize: 44, fontWeight: "800", color: '#181618' }}  >32.64</Text>
            <Text style={{ fontSize: 20, fontWeight: "400", color: '#181618' }} >Speed(mile/h)</Text>
          </View>


          {/* bisiklet foto */}

          <Image style={{ width: 200, height: 200, left: 170, bottom: 150 }} source={eBikePhoto} />

        </View>



        {/* level satırında bulunan butonlar */}
        <View style={{ flex: 1, flexDirection: 'row' }}  >


          {/* headlight button */}
          <View style={{ flex: 1, alignContent: 'center', paddingLeft: 15 }}>
            <HeadBoton />
          </View>


          <View style={{ flex: 2, flexDirection: 'row' }}>
            {/* eksi butonu */}
            <TouchableOpacity
              onPress={handleDecrease}

              style={{
                backgroundColor: "#2E8A59",

                width: 50,
                borderRadius: 15,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',


                position: 'relative',



              }}>
              <Text style={{ fontSize: 64, color: '#fff', textAlign: 'center', justifyContent: 'center', bottom: 20 }}>
                -
              </Text>
            </TouchableOpacity>

            {/* level yazısı */}
            <Text style={{ fontSize: 36, color: levelTextColor, width: '50%', textAlign: 'center', }}>Level:{sayi}</Text>

            {/* artı butonu */}
            <TouchableOpacity
              onPress={handleIncrease}

              style={{
                backgroundColor: "#2E8A59",

                width: 50,
                borderRadius: 15,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',



              }}>
              <Text style={{ fontSize: 48, color: '#fff', textAlign: 'center', justifyContent: 'center', bottom: 9, }}>
                +
              </Text>
            </TouchableOpacity>
          </View>

        </View>



        {/* alt üçlü */}
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
          <TouchableOpacity><View style={{ borderRadius: 10, borderWidth: 0.5, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, paddingTop: 10 }}><Text style={{ fontSize: 14, fontWeight: 500, color: '#181618' }}>single mileage</Text><Text style={{ fontSize: 12, fontWeight: 200, color: '#181618' }}>(mileage)</Text><Text style={{ fontWeight: 500, fontSize: 24, color: '#181618' }}>0</Text></View></TouchableOpacity>
          <TouchableOpacity><View style={{ borderRadius: 10, borderWidth: 0.5, paddingBottom: 10, paddingLeft: 15, paddingRight: 45, paddingTop: 10 }}><Text style={{ fontSize: 14, fontWeight: 500, color: '#181618' }}>Ridetime</Text><Text style={{ fontSize: 12, fontWeight: 200, color: '#181618' }}>(s)</Text><Text style={{ fontWeight: 500, fontSize: 24, color: '#181618' }}>0</Text></View></TouchableOpacity>
          <TouchableOpacity><View style={{ borderRadius: 10, borderWidth: 0.5, paddingBottom: 10, paddingLeft: 15, paddingRight: 45, paddingTop: 10 }}><Text style={{ fontSize: 14, fontWeight: 500, color: '#181618' }}>Total Mile</Text><Text style={{ fontSize: 12, fontWeight: 200, color: '#181618' }}>(mile)</Text><Text style={{ fontWeight: 500, fontSize: 24, color: '#181618' }}>5.4</Text></View></TouchableOpacity>
        </View>
      </View>

      <View style={{ marginBottom: 25 ,flex:1.2,justifyContent:'center',alignContent:'center',borderRadius:20,position:'relative'}}>
        <TouchableOpacity style={{ flex:1,justifyContent:'center',alignItems:'center',borderRadius:20}}
          onPress={() => { navigation.navigate('NavHome') }}>
            <Image style={{height:'100%',width:'100%',resizeMode:'cover',borderRadius:20}} source={require('../../assets/mapBackGroundImage.jpg')} />
            <Text style={{position:'absolute',top:20,left:20,fontSize:32,fontWeight:'500',zIndex:2,color:'#2E8A59',}}>MAP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  level: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
  navgisation: {
    width: '100%',
    height: 50,
    backgroundColor: 'green'
  }
});

export default AnaSayfa