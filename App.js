import React, {Component} from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './components/screens/Home.js';
import Detail from './components/screens/Detail.js';
import Splash from './components/screens/Splash.js';
import Quiz from './components/screens/Quiz';
import Soal from "./components/screens/Soal.js";
import Materi from "./components/screens/Materi.js";

const Stack = createNativeStackNavigator();

function App(){
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName= "Splash" screenOptions={{headerShown: false}}>
      <Stack.Screen name ="Home" component={Home}></Stack.Screen>
      <Stack.Screen name ="Detail" component={Detail}></Stack.Screen>
      <Stack.Screen name = "Splash" component={Splash}></Stack.Screen>
      <Stack.Screen name = "Quiz" component={Quiz}></Stack.Screen>
      <Stack.Screen name = "Soal" component={Soal}></Stack.Screen>
      <Stack.Screen name = "Materi" component={Materi}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default App;