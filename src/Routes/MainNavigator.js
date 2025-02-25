import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SCREENS} from '../Constants/screens';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SCREENS.SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={SCREENS.WelcomeScreen} />
        <Stack.Screen
          name="LanguageScreen"
          component={SCREENS.LanguageScreen}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={SCREENS.OnboardingScreen}
        />
        <Stack.Screen name="SignUpScreen" component={SCREENS.SignUpScreen} />
        <Stack.Screen name="SignInScreen" component={SCREENS.SignInScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={SCREENS.ForgotPasswordScreen}
        />
        <Stack.Screen
          name="BackEmailScreen"
          component={SCREENS.BackEmailScreen}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={SCREENS.NewPasswordScreen}
        />
         <Stack.Screen
          name="HomeScreen"
          component={SCREENS.HomeScreen}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
