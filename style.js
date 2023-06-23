import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#884040',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
    header: {
      position:'fixed',
      top:220,
      fontSize:20,
      fontWeight:"800",



    },
    textStyle: {
      fontSize: 24,
      color: '#fff',
      textAlign: "center",
    },
    homepagewhite:{
      color:'#F9F8F9'

    },
    homepagebuttongreen:{
      color:'#2E8A59'
    },
    homepagebuttonwhite:{
      color:"#FAF8FA"
      
    },
    homepagetextblack:{
      color:"#181618"
    },
    btnActive:{
      backgroundColor:'green'
      
    },
    btn:{
      backgroundColor:'green'
    },
    
});

export default styles
