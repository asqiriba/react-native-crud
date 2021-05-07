import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens files.
import FormScreen from './screens/FormScreen';
import IndexScreen from './screens/IndexScreen';
import DetailsScreen from './screens/DetailsScreen';

// Import constants.js
import * as constant from './controllers/constants'

// Declaration of the navigator stack.
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions = {{
          headerStyle: {
            backgroundColor: constant.backgroundColor,
          },
          headerTintColor: constant.headerTintColor,
        }}
      >
      <Stack.Screen 
        name = "IndexScreen" 
        component = {IndexScreen} 
        options = {{ title: 'This is the Index Screen' }}
      />
      <Stack.Screen 
        name = "FormScreen" 
        component = {FormScreen} 
        options = {{ title: 'This is the Form Screen' }}
      />
      <Stack.Screen 
       name = "DetailsScreen" 
       component = {DetailsScreen} 
       options = {{ title: 'This is the Details Screen' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}