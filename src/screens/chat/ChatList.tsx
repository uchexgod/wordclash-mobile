import RequestIcon from 'components/icons/RequestIcon';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeNavProps} from 'types';

export default function ChatList({}: HomeNavProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topDash}>
        <View>
          <Text style={styles.username}>uchenoel</Text>

          <Text style={styles.credits}>200,000</Text>
        </View>

        <Pressable
          style={[
            styles.newBtn,
            {
              shadowColor: '#7952B3',
              shadowOpacity: 1,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowRadius: 13,
            },
          ]}>
          <Text style={styles.btnText}>New</Text>
        </Pressable>

        <View>
          <RequestIcon />
        </View>
      </View>
      <View style={styles.chatList}>
        <View style={styles.chatListItem}>
          <Text style={styles.roomId}>33-CRYPSY-ODYSSY</Text>
          <View style={styles.itemFoot}>
            <Icon name="trophy-outline" size={16} color="#FBBC05" />
            <Text style={styles.footText}>uchenoel</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
  },
  username: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#fff',
  },
  credits: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 16,
    color: '#FBBC05',
  },
  newBtn: {
    backgroundColor: '#141618',
    borderColor: '#FBBC05',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 10,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
  },
  topDash: {
    borderBottomColor: '#33373B',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },

  chatList: {
    padding: 24,
  },
  roomId: {
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
  },
  itemFoot: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footText: {
    marginLeft: 8,
    color: '#fff',
  },

  chatListItem: {
    padding: 8,
    borderColor: '#9A6FDA',
    borderRadius: 10,
    height: 64,
    borderWidth: 2,
    backgroundColor: '#33373B',
    shadowColor: '#7952B3',
    shadowOpacity: 1,
    shadowRadius: 4,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 16,
  },
});
