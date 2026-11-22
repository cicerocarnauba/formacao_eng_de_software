import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ChatScreen from './src/Screens/ChatScreen';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{title: "Home Screen"}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{title: "Chat Screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
