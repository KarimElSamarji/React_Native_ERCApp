import React, { Component } from 'react';
import {

  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Home from './pages/Home';
import Material from './pages/Material';
import Mechanical from './pages/Mechanical';
import LeaderShip from './pages/LeaderShip';
import AllShifts from './pages/AllShifts';
import Boss from './pages/Boss'
import SplashScreen from 'react-native-splash-screen'
import MatVeh from './pages/MatVeh';



class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {


    const Stack = createNativeStackNavigator();
    return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Material" component={Material} />
          <Stack.Screen name="Mechanical" component={Mechanical} />
          <Stack.Screen name="Boss" component={Boss} />
          <Stack.Screen name="LeaderShip" component={LeaderShip} />
          <Stack.Screen name="AllShifts" component={AllShifts} />
          <Stack.Screen name="MatVeh" component={MatVeh} />

        </Stack.Navigator>
      </NavigationContainer>


    );
  }


};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
