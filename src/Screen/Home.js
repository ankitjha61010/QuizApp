import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../../Component/Title'
import Lottie from 'lottie-react-native';

const Home = (props) => {
  return (
    <View style={{flex:1,backgroundColor:'rgba(100, 100, 105, 0.5)'}}>
     <Title titleText="Let's Play Quiz"/>
<View style={{flex:1,}}>


<Lottie source={require("../../assets/Homelogo.json")}  autoPlay loop style={{height:'100%',width:'100%'}} resizeMode="contain" />

</View>
<View style={{flex:1.4,justifyContent:'flex-end'}}>
     <TouchableOpacity onPress={()=>{props.navigation.navigate('MyTabs')}} style={{backgroundColor:'#5A5A5A',marginBottom:10,marginHorizontal:10,borderRadius:10}}>
        <Text style={{textAlign:'center',padding:16,color:'white',fontSize:20}} >Start</Text>
     </TouchableOpacity>
     </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})