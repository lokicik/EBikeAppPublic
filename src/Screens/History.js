import { View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'


const DATA = [
  {
    id: '1',
    title: '14.08.2023',
  },
  {
    id: '2',
    title: '13.08.2023',
  },
  {
    id: '3',
    title: '12.08.2023',
  },
  {
    id: '4',
    title: '11.08.2023',
  },
  {
    id: '5',
    title: '10.08.2023',
  },
  {
    id: '6',
    title: '09.08.2023',
  },
  {
    id: '7',
    title: '08.08.2023',
  },
  {
    id: '8',
    title: '07.08.2023',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styleHistory.item, {backgroundColor}]}>
    <Text style={[styleHistory.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);


const History = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#2E8A59' : '#FFF';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };


  return (
    <SafeAreaView style={styleHistory.container}>
      <View style={styleHistory.header}>
        <Text style={styleHistory.headerText}>Riding History</Text>
      </View>
      
      <View style={styleHistory.main}>
        
          <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        
      </View>

      <View style={styleHistory.footer}>
        <Text style={styleHistory.footerText}>History</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default History

const styleHistory = StyleSheet.create ({
  header:{
    flex:1,
    backgroundColor:"#2E8A59",
    justifyContent:'center',
    alignItems:'center',
    opacity:0.85
  },

  headerText:{
    fontSize:36,
    color:'black'
  },

  main:{
    flex:8,
    backgroundColor:"white",
  },

  mainText:{
    fontSize:24
  },

  flatListText:{

  },

  footer:{
    flex:1,
    backgroundColor:"#2E8A59",
    justifyContent:'center',
    alignItems:'center',
  },

  footerText:{
    fontSize:16
  },
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#2E8A59',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  
})