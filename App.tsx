import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';


const ColorTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      background: 'white'
  }
};

const App = () => {
  return (
    <NavigationContainer theme={ColorTheme}>
       <Navigation/>
    </NavigationContainer>
  )
}

export default App;
