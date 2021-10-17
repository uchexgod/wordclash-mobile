import Bell from 'components/icons/Bell';
import React from 'react';
import {StyleSheet, View, Image, Pressable, FlatList} from 'react-native';
import {ChatListItem} from '../../components/elements/ChatListItem';
import Text from '../../components/elements/Text';

import Coins from '../../components/icons/Coins';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
    title: 'nigeria words clash',
    top: 'mamba',
    words: '120k',
    active: true,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'uche and friends',
    top: 'uche',
    words: '120k',
    active: true,
  },

  {
    id: 'bd7acb-c1b1-46c2-aed5-3ad53bb28ba',
    title: 'the global chat room',
    top: 'noel',
    words: '130k',
    active: true,
  },
];
export default function ChatList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://eu.ui-avatars.com/api/?background=random'}}
          />

          <View style={styles.userinfo}>
            <Text>uchenoel</Text>
            <View style={styles.userPoints}>
              <Coins style={styles.points} />
              <Text>89,000</Text>
            </View>
          </View>
        </View>

        <Pressable onPress={() => console.warn('pressed')}>
          <Bell />
        </Pressable>
      </View>

      {/* <View style={styles.chatList}>
        <FlatList
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Line}
          data={DATA}
          renderItem={({item}) => (
            <ChatListItem
              item={item}
              onPress={() => console.log('navigating..')}
            />
          )}
        />
      </View> */}
    </View>
  );
}

const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#495057',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#212529',
  },

  header: {
    backgroundColor: '#212529',
    padding: 16,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  userinfo: {},

  userPoints: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    marginRight: 8,
  },

  tobTabs: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'center',
  },
  tabBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 154,
    height: 47,
    backgroundColor: '#5A31F4',
    borderRadius: 8,
    margin: 8,
  },
  chatList: {
    flex: 1,
    marginTop: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

    backgroundColor: '#343A40',
  },
  chatListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#495057',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 45,
  },
});
