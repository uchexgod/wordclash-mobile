/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './src/screens/chat';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {StyleSheet} from 'react-native';

const RootStack = createNativeStackNavigator();
export default function App() {
  const colorScheme = useColorScheme();
  const barStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
  return (
    <NavigationContainer>
      <SafeAreaView
        style={[
          styles.container,
          {backgroundColor: colorScheme === 'light' ? '#fff' : '#212529'},
        ]}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={barStyle}
        />
        <RootStack.Navigator>
          <RootStack.Screen
            name="home"
            component={HomeStack}
            options={{headerShown: false}}
          />
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
