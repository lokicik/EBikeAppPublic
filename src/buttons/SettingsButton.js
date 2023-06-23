import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    button: {
      backgroundColor: '#fff',
      padding: 4,
      borderRadius: 15,
      width: '100%',
      height:70,
      justifyContent:'center'
    },
    buttonText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 28,
    },
    overlay: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomSheet: {
      backgroundColor: '#fff',
      padding: 16,
      maxHeight: '100%',
      alignSelf: 'stretch',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    defaultvalueonbutton:{
      color: '#000',
      fontWeight: 400,
      fontSize: 18,
      
    },
    bottomSheetTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 16,
    },
    option: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    optionText: {
      fontSize: 16,
    },
    selectedOptionText: {
      fontWeight: 'bold',
    },
  });
 