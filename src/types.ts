import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};

export type LoginNavProps = StackScreenProps<RootStackParamList, 'Auth'>;

export type HomeNavProps = StackScreenProps<AppStackParamList, 'RoomList'>;

// export type ChatListProps = NativeStackScreenProps<
//   RootStackParamList,
//   'chatList'
// >;

export type AuthStackParamList = {
  Login: undefined;
};

export type AppStackParamList = {
  RoomList: undefined;
  ChatRoom: undefined;
};
