import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { InfoScreen } from '../screens/InfoScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';


export type RootStackParams = {
  Home: undefined;
  Detail: undefined;
  Info: undefined;
}

const titleConfiguration = {
  headerTitle: 'Indicadores',
  headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      shadowOffset: {
          height: 0,
          width: 0
      }
  },
  headerTintColor:'black',
  headerBackTitle:'Atras'
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerMode: 'screen' 
    }}
    >
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          ...titleConfiguration,
          headerStyle: {
            backgroundColor: "#f1f3f4"
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
              <Icon.Button
                  name="menu"
                  size={20}
                  backgroundColor={'#f1f3f4'}
                  underlayColor={'#f1f3f4'}
                  color={'blue'}
              />
          )
      }}
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen}
        options={{
          title: 'Default',
          headerStyle: {
            backgroundColor: "#f1f3f4",
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen 
        name="Info" 
        component={InfoScreen}
        options={{
          title: 'Default',
          headerStyle: {
            backgroundColor: "#f1f3f4",
        
          },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}