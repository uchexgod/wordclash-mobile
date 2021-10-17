import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList} from '../../types';
import Login from './Login';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
