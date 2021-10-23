import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeNavProps} from 'types';

const {width, height} = Dimensions.get('window');

export default function ChatList({navigation}: HomeNavProps) {
  const boxTranslate = useSharedValue(0);
  const modalTranslate = useSharedValue(height - 100);

  const modalX = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withSpring(modalTranslate.value, {damping: 50})},
      ],
    };
  });

  const switchTab = (tab: string) => {
    if (tab === 'create') {
      boxTranslate.value = -width;
    } else {
      boxTranslate.value = 0;
    }
  };

  const animate = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(boxTranslate.value, {duration: 500})},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.topDash}>
        <View>
          <Text style={styles.username}>uchenoel</Text>

          <Text style={styles.credits}>200,000</Text>
        </View>

        <Pressable
          onPress={() => (modalTranslate.value = 0)}
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
          <Icon name="podium" size={24} color="#FBBC05" />
        </View>
      </View>
      <View style={styles.chatList}>
        <Pressable
          style={styles.chatListItem}
          onPress={() => navigation.navigate('ChatRoom')}>
          <Text style={styles.roomId}>33-CRYPSY-ODYSSY</Text>
          <View style={styles.itemFoot}>
            <Icon name="trophy-outline" size={16} color="#FBBC05" />
            <Text style={styles.footText}>uchenoel</Text>
          </View>
        </Pressable>
      </View>

      <Animated.View style={[styles.createModal, modalX]}>
        <View style={styles.mHead}>
          <View style={styles.hActions}>
            <Pressable onPress={() => switchTab('search')}>
              <Icon name="search" size={32} color="#fff" />
            </Pressable>
            <Pressable onPress={() => switchTab('create')}>
              <Icon name="add-circle" size={32} color="#1f1f20" />
            </Pressable>
          </View>

          <Pressable onPress={() => (modalTranslate.value = height - 100)}>
            <Icon name="close-circle" size={24} color="#fff" />
          </Pressable>
        </View>

        <Animated.View style={[styles.mBody, animate]}>
          <View style={[styles.joinG]}>
            <View>
              <TextInput
                editable={false}
                value="33-CRYIO-ODYSSY"
                style={styles.tInput}
              />
            </View>

            <Pressable style={styles.cbtn}>
              <Text style={styles.cbtnText}>CREATE GAME</Text>
            </Pressable>
          </View>

          <View style={[styles.createG]}>
            <View>
              <Pressable style={styles.copyTxt}>
                <Icon name="copy" size={24} color="#bebcbcba" />
              </Pressable>

              <TextInput
                editable={false}
                value="33-CRYIO-ODYSSY"
                style={styles.tInput}
              />
            </View>

            <View style={styles.options}>
              <Pressable style={styles.optBtn}>
                <Text style={styles.optText}>words</Text>
              </Pressable>
              <Pressable style={styles.optBtn}>
                <Text style={styles.optText}>trivia</Text>
              </Pressable>
            </View>

            <Pressable style={styles.cbtn}>
              <Text style={styles.cbtnText}>CREATE GAME</Text>
            </Pressable>
          </View>
        </Animated.View>
      </Animated.View>
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

  joinG: {
    width: '100%',
    marginRight: 20,
  },
  createG: {
    width: '100%',
    marginLeft: 10,
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
  createModal: {
    backgroundColor: '#33373C',
    width: '100%',
    height: 350,
    position: 'absolute',
    bottom: 0,
    padding: 16,

    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  hActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '20%',
  },
  mHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mBody: {
    flexDirection: 'row',
  },
  copyTxt: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 900,
  },
  optBtn: {
    height: 54,
    borderRadius: 10,
    backgroundColor: '#212529',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  optText: {
    color: '#fff',
    fontFamily: 'Inter-Regular',
  },
  cbtnText: {
    color: '#fff',
    fontFamily: 'Inter-Regular',
  },
  cbtn: {
    backgroundColor: '#9A6FDA',
    padding: 16,
    marginTop: 24,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tInput: {
    height: 65,
    backgroundColor: '#212529',
    width: '100%',
    padding: 8,
    borderRadius: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginTop: 8,
    borderColor: '#9A6FDA',
    borderWidth: 1,
  },
});
