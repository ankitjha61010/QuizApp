import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../../src/Screen/About';
import Home from '../../src/Screen/Home';
import Music from '../../src/Screen/Music';
import Quiz from '../../src/Screen/Quiz';
import {Image} from 'react-native';
import Quizfontpage from '../../src/Screen/Quizfontpage';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,
        tabBarStyle: { height: 75 }
    
    }}>
      <Tab.Screen
        name="Quizfontpage"
        component={Quizfontpage}
        options={{
          tabBarLabel: 'Quiz',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('.././../assets/QuizHome.png')}
              style={{height:40,width:55}} resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={Music}
        options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('.././../assets/music.png')}
            style={{height:40,width:55}} resizeMode="contain"
          />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('.././../assets/About.png')}
            style={{height:40,width:55}} resizeMode="contain"
          />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
