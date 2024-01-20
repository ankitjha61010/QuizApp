import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VideoMusic from '../MusicPlayer/VideoMusic'

const Music = () => {
  return (
    <View>
       <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
        <Image source={require('../../assets/backarrow.png')} style={{padding:25,marginBottom:10}}/>
      </TouchableOpacity>
      <View>

      <VideoMusic/>
      </View>
    </View>
  )
}

export default Music

const styles = StyleSheet.create({})