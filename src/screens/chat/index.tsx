import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatList from './ChatList';
import ChatScreen from './ChatScreen';
import {AppStackParamList} from '../../types';

const Stack = createStackNavigator<AppStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RoomList" component={ChatList} />
      <Stack.Screen name="ChatRoom" component={ChatScreen} />
    </Stack.Navigator>
  );
}
