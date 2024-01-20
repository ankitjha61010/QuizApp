import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({titleText}) => {
  return (
    <View style={{flex:1}}>
      <Text style={{textAlign:'center',padding:12,fontWeight:'bold',fontSize:30,color:'grey'}}>{titleText}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({})