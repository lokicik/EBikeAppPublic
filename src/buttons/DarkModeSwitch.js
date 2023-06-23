//This is an example code to understand Switch//

import React from 'react';
//import react in our code.

import { Switch, Text, View, StyleSheet } from 'react-native';
//import all the components we are going to use.

export default class Profil extends React.Component {
  //Initial state false for the switch. You can change it to true just to see.

  state = { switchValue: false };

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text

  };





  render() {
    const openMessage = 'Karanlık Mod Açık';
    const closeMessage = 'Karanlık Mod Kapalı';
    var renk;
    // const { testVal } = this.state
    // testItem = (
    //   <Text
    //     style={{
    //       position:'absolute',
    //       left:50,
    //       top:200,
    //       backgroundColor:'white',
    //     }}
    //   >
    //     Value: {testval}
    //   </Text>
    // )




    return (

      <View style={this.state.switchValue ? (styles1.container1) : (styles1.container2)}>
        {/Text to show the text according to switch condition/}
        <Text style={this.state.switchValue ? (styles1.text1) : (styles1.text2)}>{this.state.switchValue ? [openMessage] : [closeMessage]}</Text>

        {/Switch with value set in constructor/}
        {/onValueChange will be triggered after switch condition changes/}
        <Switch

          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}

        />
      </View>
    );

  }
}
const styles1 = StyleSheet.create({
    container1: {
      backgroundColor:'black',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    container2: {
      backgroundColor:'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    text1:{
      color:'white',
      fontSize:30,
    },
    text2:{
      color:'black',
      fontSize:30,
    },
  });