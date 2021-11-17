import 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './screens/ProductDetails';
import Signin from './screens/Signin';
import {StatusBar} from 'react-native';
import COLORS from './src/consts/colors';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;