import React from 'react';
import {useState} from 'react';
import dayjs from 'dayjs';
import {StyleSheet, TextInput} from 'react-native';
import {FlatList, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-native-uuid';
import {useRef} from 'react';

import {useCallback} from 'react';
import {useEffect} from 'react';
import RoomHead from 'components/elements/RoomHead';

interface message {
  id: string;
  sender: string;
  content: string;
  time: number;
}

export default function ChatScreen() {
  const [msgs, updateMessages] = useState([
    {
      id: '550e15bf-08ac-4e97-bc16-a0f9ebb929f3',
      time: 1630508141881,
      sender: 'joe',
      content: 'live',
    },
    {
      id: '9d62babc-c6f1-439b-914b-c14476824e5e',
      time: 1630508142881,
      sender: 'dave',
      content: 'server',
    },
    {
      id: '9d62babc-c6f1-43ib-984b-c19476824e5e',
      time: 1630508142881,
      sender: 'me',
      content: 'venting',
    },
    {
      id: '9d62babc-c6f1-439b-984b-c14476824e5e',
      time: 1630508142881,
      sender: 'chocho',
      content: 'raring',
    },
    {
      id: '9d62babc-c6f1-439b-984b-c19476824e5e',
      time: 1630508142881,
      sender: 'me',
      content: 'verse',
    },
    {
      id: '9d62babc-c6f1-439b-914b-c0940076824e5e',
      time: 1630508142881,
      sender: 'system',
      content: 'salma buiote voo',
    },

    {
      id: '9d62babc-h6f1-439b-984b-c14476824e5e',
      time: 1630508142881,
      sender: 'chocho',
      content: 'gating',
    },
    {
      id: '9d62babc-cyf1-439b-984b-c19076824e5e',
      time: 1630508142881,
      sender: 'me',
      content: 'viles',
    },
    {
      id: '9d62babc-c6f1-439b-914b-c14406824e5e',
      time: 1630508142881,
      sender: 'dave',
      content: 'server',
    },

    {
      id: '9d62babc-c6f1-4l9b-914b-c0940076824e5e',
      time: 1630508142881,
      sender: 'system',
      content: 'salma buiote voo cooking',
    },
    {
      id: '9d62babc-c601-439b-914b-c14436824e5e',
      time: 1630508142881,
      sender: 'marison',
      content: 'contentingf',
    },
    {
      id: '9d62babc-cyf1-4y9b-984b-c19076824e5e',
      time: 1630508142881,
      sender: 'me',
      content: 'village',
    },
    {
      id: '9d62babc-c601-039b-914b-c14436824e5e',
      time: 1630508142881,
      sender: 'joseph',
      content: 'content',
    },
  ]);
  const [word, addWord] = useState<string>('');
  const listRef = useRef<FlatList<message>>(null);

  const format = (time: number) => {
    return dayjs(time).format('hh:mm:ss a');
  };
  const sendMsg = () => {
    if (word !== '') {
      const now = dayjs().valueOf();
      const id = uuid.v4().toString();
      updateMessages([...msgs, {id, time: now, content: word, sender: 'me'}]);
      addWord('');
    }
  };

  const scrollToBottom = useCallback(
    (animated: boolean = true) => {
      if (listRef) {
        listRef.current!.scrollToEnd({animated});
      }
    },
    [listRef],
  );

  const godown = () => {
    if (listRef) {
      listRef.current!.scrollToEnd();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [msgs, scrollToBottom]);

  return (
    <View style={styles.container}>
      <RoomHead />

      <View style={styles.messages}>
        <FlatList
          ref={listRef}
          removeClippedSubviews
          onContentSizeChange={() => godown()}
          automaticallyAdjustContentInsets={false}
          data={msgs}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>
            item.sender === 'system' ? (
              <View style={styles.sysMsg}>
                <Text style={{color: '#7E7E7E'}}> new characters added:</Text>
                <Text style={styles.sysText}>{item.content}</Text>
              </View>
            ) : (
              <View
                style={[
                  item.sender === 'me' ? styles.inMsg : styles.outMsg,
                  styles.msg,
                ]}>
                <Text
                  style={[item.sender === 'me' ? styles.hidden : styles.pmsg]}>
                  {item.sender}
                </Text>
                <View style={styles.bubbleBottom}>
                  <Text style={styles.tContent}>{item.content}</Text>
                  <Text style={styles.tTime}>{format(item.time)}</Text>
                </View>
              </View>
            )
          }
        />
      </View>

      <View style={styles.wordPad}>
        <TextInput
          style={styles.input}
          textContentType="none"
          value={word}
          onChangeText={addWord}
          autoCorrect={false}
          autoCompleteType="off"
          keyboardType="default"
        />

        <Pressable style={styles.btn} onPress={() => sendMsg()}>
          <Icon name="send" size={32} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wordPad: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#212529',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,

    padding: 8,
    borderRadius: 8,
    backgroundColor: '#33373C',
    borderWidth: 1,
    borderColor: '#495057',
  },
  messages: {
    marginBottom: 'auto',
    backgroundColor: '#33373C',
    flex: 1,
    paddingTop: 10,
  },
  msg: {
    borderRadius: 8,
    marginBottom: 8,
  },

  inMsg: {
    marginRight: 16,
    marginLeft: 'auto',
    backgroundColor: '#212529',
    padding: 8,
  },
  outMsg: {
    paddingHorizontal: 16,
    paddingVertical: 4,

    marginLeft: 16,
    marginRight: 'auto',
    backgroundColor: '#212529',
  },
  pmsg: {
    color: 'orange',
  },

  bubbleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  hidden: {
    height: 0,
    opacity: 0,
  },

  sysMsg: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '70%',
    alignItems: 'center',
    padding: 8,

    marginVertical: 8,
  },
  sysText: {
    color: '#9A6FDA',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  tTime: {
    color: '#fff',
    fontSize: 8,
    marginLeft: 10,
  },
  tContent: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
  },

  viewhead: {},
});
