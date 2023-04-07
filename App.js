import React, {Component} from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './components/screens/Home.js';
import Detail from './components/screens/Detail.js';
import Splash from './components/screens/Splash.js';
import Jawa from './components/screens/Jawa.js';
import Jateng from "./components/screens/Jateng.js";
import Quiz from './components/screens/Quiz';
import Sumatra from "./components/screens/Sumatra.js";

const Stack = createNativeStackNavigator();

function App(){
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName= "Quiz" screenOptions={{headerShown: false}}>
      <Stack.Screen name ="Home" component={Home}></Stack.Screen>
      <Stack.Screen name ="Detail" component={Detail}></Stack.Screen>
      <Stack.Screen name = "Splash" component={Splash}></Stack.Screen>
      <Stack.Screen name = "Jawa" component={Jawa}></Stack.Screen>
      <Stack.Screen name = "Sumatra" component={Sumatra}></Stack.Screen>
      <Stack.Screen name = "Jateng" component={Jateng}></Stack.Screen>
      <Stack.Screen name = "Quiz" component={Quiz}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default App;