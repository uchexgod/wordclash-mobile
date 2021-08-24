import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from './ChatList';
import ChatScreen from './ChatScreen';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="chat-list" component={ChatList} />
      <Stack.Screen name="chat-screen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
