/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './src/screens/chat';
import AuthStack from './src/screens/auth';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootStackParamList} from 'types';

const RootStack = createStackNavigator<RootStackParamList>();
export default function App() {
  const colorScheme = useColorScheme();
  const barStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
  return (
    <GestureHandlerRootView style={{flex: 1}}>
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
            <RootStack.Navigator initialRouteName="Auth">
              <RootStack.Screen
                name="Home"
                component={HomeStack}
                options={{headerShown: false, gestureEnabled: false}}
              />
              <RootStack.Screen
                name="Auth"
                component={AuthStack}
                options={{headerShown: false, gestureEnabled: false}}
              />
            </RootStack.Navigator>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
