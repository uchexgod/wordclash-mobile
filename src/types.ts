import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  chatList: undefined;
  chatScreen: undefined | {roomId: string};
};

export type ChatListProps = NativeStackScreenProps<
  RootStackParamList,
  'chatList'
>;
