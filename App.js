import { Image } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import xboxIcon from './assets/xbox.png';
import psIcon from './assets/ps.png';
import nintendoIcon from './assets/nintendo.png';

import Xbox from './componentes/Xbox';
import PlayStation from './componentes/Playstation';
import Nintendo from './componentes/Nintendo';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Abas.Navigator>
        <Abas.Screen name="Xbox" component = { Xbox } options={{
        tabBarIcon: () => (
          <Image source={xboxIcon} />
        ),
      }}/>
        <Abas.Screen name="PlayStation" component = { PlayStation } options={{
        tabBarIcon: () => (
          <Image source={psIcon} />
        ),
      }}/>
        <Abas.Screen name="Nintendo" component = { Nintendo } options={{
        tabBarIcon: () => (
          <Image source={nintendoIcon} />
        ),
      }}/>
      </Abas.Navigator>
    </NavigationContainer>
  );
}
