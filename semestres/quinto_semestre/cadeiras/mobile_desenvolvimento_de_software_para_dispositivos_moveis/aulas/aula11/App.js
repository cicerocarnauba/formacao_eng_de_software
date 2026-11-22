import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardapioScreen from './src/screens/CardapioScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';

// 1 - Criação da instância do Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {/* 1 - Registro das telas Cardápio e Detalhes no Stack.Navigator */}
      <Stack.Navigator
        initialRouteName="Cardápio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E65100',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Cardápio"
          component={CardapioScreen}
          options={{
            title: 'Cardápio',
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{
            title: 'Detalhes do Lanche',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
