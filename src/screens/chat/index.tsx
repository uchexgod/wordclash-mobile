import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from './ChatList';
import ChatScreen from './ChatScreen';
import {RootStackParamList} from '../../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="chatList" component={ChatList} />
      <Stack.Screen name="chatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
