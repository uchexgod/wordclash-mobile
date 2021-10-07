/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './src/screens/chat';
import AuthStack from './src/screens/auth';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

const RootStack = createNativeStackNavigator();
export default function App() {
  const colorScheme = useColorScheme();
  const barStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView
          style={[
            {
              backgroundColor: colorScheme === 'light' ? '#fff' : '#212529',
              flex: 1,
            },
          ]}>
          <StatusBar barStyle={barStyle} />
          <RootStack.Navigator initialRouteName="login">
            <RootStack.Screen
              name="home"
              component={HomeStack}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="login"
              component={AuthStack}
              options={{headerShown: false}}
            />
          </RootStack.Navigator>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
