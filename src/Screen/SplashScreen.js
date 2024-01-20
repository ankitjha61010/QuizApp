import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react-native'

const SplashScreen = (props) => {

useEffect(()=>{
    setTimeout(() => {
        props.navigation.navigate('Home')
    }, 3000);
})


  return (
    <View style={{flex:1,backgroundColor:'black'}}>
        <View style={{flex:1}}>
      <Lottie source={require("../../assets/Logo.json")}  autoPlay loop style={{height:'89%',width:'100%'}} resizeMode="contain" />
      </View>
      <View style={{flex:1}}>
        <Text  style={{textAlign:'center',color:'white',fontSize:30,}}>
            Welcome To My App... {'\n'} Let's play & Win!!!
        </Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})