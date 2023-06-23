import { View, Text, Alert, SafeAreaView, StyleSheet, ActivityIndicator, ScrollView, RefreshControl, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";




const Weather = () => {

  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadForecast = async () => {
    setRefreshing(true);
    // const { status } = await Location.requestForegroundPermissionsAsync();
    // if (status !== 'granted') {
    //   Alert.alert("permission to access location was denied.");
    // }

    // let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    
    
    
    // emin değilim ama app keyimizi gitmeniz gerekiyor open weather sitesine giderek bunu sağlayabilirsiniz 
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Edirne,TR,uk&APPID=---your app ID ---`);
    const data = await response.json();
    // console.log(data);
 
    if (!response.ok) {

      Alert.alert('Error', 'something went Wrong');
    }
    else {
      setForecast(data);
    }
    setRefreshing(false);

  }

  // useEffects

  useEffect(() => {
    loadForecast();
  },
    []
  );


  if (!forecast) {
    return (
      <SafeAreaView style={stylesWeather.loading}>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  }


  const current = forecast.weather;

  const lastweather = current[0].description
  const temp = Math.floor(forecast.main.temp - 273.15);
   console.log('current==>>',current[0].icon);

  //  console.log(current[0].icon);
  //  console.log(lastweather);
  //  console.log(forecast.main.temp);
  // const banane = '02n'


  return (
    <SafeAreaView style={stylesWeather.container}>

      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => loadForecast()}
        />
      }
        style={{ marginTop: 5 }}
      >
        <View style={stylesWeather.current}>
          <Image
            style={stylesWeather.largeIcon}
            source={{ uri: `http://openweathermap.org/img/wn/${current[0].icon}@4x.png`, }}
          />
          <Text style={stylesWeather.titleTemp}> {temp}°C </Text>

        </View>
        <Text style={stylesWeather.title}> {lastweather} </Text>
      </ScrollView>
    </SafeAreaView>
  )
}


export default Weather


const stylesWeather = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

  },

  largeIcon: {
    width: 70,
    height:50,

  },

  title: {
    textAlign: 'center',
    fontSize:16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom:5,
  },
  titleTemp: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  current: {
    flexDirection: 'row',
    alignItems: 'center',

  }


})