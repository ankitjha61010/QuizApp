import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/Screen/Home'
import Quiz from './src/Screen/Quiz'
import Result from './src/Screen/Result'
import MyStack from './Navigation/Stack/Stack'
import { NavigationContainer } from '@react-navigation/native'
import Analysys from './src/Screen/Analysys'

const App = () => {
  return (
    <View style={{flex:1}}>
     {/* <Home/> */}
<NavigationContainer>
     <MyStack/>
     </NavigationContainer>
{/* <Quiz/> */}
     {/* <Analysys/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})