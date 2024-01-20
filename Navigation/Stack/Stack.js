import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../../src/Screen/Home'
import Result from '../../src/Screen/Result'
import Quiz from '../../src/Screen/Quiz'
import SplashScreen from '../../src/Screen/SplashScreen';
import Analysys from '../../src/Screen/Analysys';
import MyTabs from '../Bottom/Bottom';
import Quizfontpage from '../../src/Screen/Quizfontpage';
const Stack = createStackNavigator();

const MyStack=()=> {
  return (
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Analysys" component={Analysys} />
      <Stack.Screen name="Quizfontpage" component={Quizfontpage} />
    </Stack.Navigator>
  );
}

export default MyStack;