import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RoomHead() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={32} color="#fff" />
      </Pressable>

      <View style={styles.timer}>
        <Icon name="alarm-outline" size={18} color="#FBBC05" />
        <Text style={styles.time}>01:59</Text>
      </View>

      <View style={styles.leader}>
        <Text style={styles.nText}>asenwibor</Text>
      </View>

      <View style={styles.position}>
        <Text style={styles.bText}>001</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',

    backgroundColor: '#212529',
    height: 60,
    width: '100%',
  },

  timer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  time: {
    color: '#fff',
    marginLeft: 5,
  },

  leader: {
    backgroundColor: '#000',
    height: 36,
    width: 138,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#FBBC05',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  nText: {
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
  },
  position: {
    height: 36,
    width: 50,
    backgroundColor: '#000',
    marginLeft: 'auto',
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
});
