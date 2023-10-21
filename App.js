import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Screen4a from './Screen/Screen4a';
import Screen4b from './Screen/Screen4b';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screen/Home';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}      tabBarOptions={{
          activeBackgroundColor: '#1BA9FF', // Màu nền khi tab đang được chọn
          inactiveBackgroundColor: '#1BA9FF', // Màu nền khi tab không được chọn
          showLabel: false, // Ẩn label
        }}   >
              <Tab.Screen name='a' component={Screen4a} options={{
                tabBarIcon: () => (
                    <Image source={
                        require('./assets/Group 10.png')
                      } 
                        style= {{width: 26, height: 24}}/>
                ),
            }}/>
              <Tab.Screen name= 'b' component={Screen4b} options={{
                tabBarIcon: () => (
                    <Image source={
                        require('./assets/Vector-2.png')
                      } 
                        style= {{width: 26, height: 24}}/>
                ),
            }}/>
              <Tab.Screen name='c' component={Home} options={{
                tabBarIcon: () => (
                    <Image source={
                        require('./assets/Vector 1 (Stroke).png')
                      } 
                        style= {{width: 26, height: 24}}/>
                ),
            }}/>
        </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Main" component={MyTabs}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
