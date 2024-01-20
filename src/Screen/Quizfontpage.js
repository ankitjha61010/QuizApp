import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Quizfontpage = (props) => {
  return (
    <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('Quiz')}} style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
      <Text style={{backgroundColor:'#666161',fontSize:25,color:'white',padding:20,borderRadius:10}}>Let's Play Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Quizfontpage