import { View, Text,} from 'react-native'
import React,{ useState } from 'react'

export default function CustomSwitch({
    selectionMode,
    option1,
    onSelectionSwitch,
}) 
const [getSelectionMode, setSelectionMode] = useState(selectionMode);

const updateSwitchData = (value) => {
  setSelectionMode(value);
  onSelectSwitch(value);
return (
    <View>
      <Text></Text>
    </View>
  )
}




<TouchableOpacity 
      style={{
        flex:1,
        backgroundColor: getSelectionMode == 1 ? '#fff' : '#000',
      }}
      activeOpacity={1}  onPress={()=> updateSwitchData(1)}>
</TouchableOpacity>