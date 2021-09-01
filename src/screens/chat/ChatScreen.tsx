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

interface message {
  id: string;
  sender: string;
  content: string;
  time: number;
}

const messages: message[] = [
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
    id: 'd61997f8-ba14-44ee-b243-4a6492011d59',
    time: 1630508146881,
    sender: 'joe',
    content: 'musk',
  },
  {
    id: '73795974-29cc-4b3a-a04e-5ba1df8a3ed8',
    time: 1630508148881,
    sender: 'uche',
    content: 'mounth',
  },
  {
    id: 'd25df32e-bee8-4064-883a-8d62260bb724',
    time: 1630508144881,
    sender: 'joe',
    content: 'serve',
  },
  {
    id: 'e7e5ee71-6d3f-4b16-9e20-77e761717ad3',
    time: 1630508126881,
    sender: 'uche',
    content: 'wife',
  },
  {
    id: '834aeedf-2360-4b56-a80c-bd1deec113c7',
    time: 1630508098881,
    sender: 'me',
    content: 'silly',
  },
  {
    id: '8027a1da-7ff1-41b1-ac36-323df939570a',
    time: 1630508150881,
    sender: 'me',
    content: 'wife',
  },
  {
    id: '3aa1f1b0-9dae-4c0d-a7e9-181ee9c1cfd7',
    time: 1630508145881,
    sender: 'joe',
    content: 'hello',
  },
  {
    id: '38c39472-f366-4985-87af-f2a88696a819',
    time: 1630508119881,
    sender: 'uche',
    content: 'tweet',
  },
  {
    id: '289418f1-abf2-4afd-b73f-fa2dcab56193',
    time: 1630508140881,
    sender: 'chinwe',
    content: 'wife',
  },
  {
    id: '9e857d67-473b-4562-bd06-a0b2a87aaa73',
    time: 1630508131881,
    sender: 'me',
    content: 'serve',
  },
  {
    id: '3a815514-1b68-4a65-a93d-7fafd256430a',
    time: 1630508104881,
    sender: 'chinwe',
    content: 'fuck',
  },
  {
    id: 'e0ec036c-bf6e-4d58-bc0c-7a5e456791f3',
    time: 1630508113881,
    sender: 'prosper',
    content: 'goat',
  },
  {
    id: '1fd55698-a23d-4412-b27c-48e4fd639373',
    time: 1630508130881,
    sender: 'uche',
    content: 'jokd',
  },
  {
    id: 'bc8829db-dea5-4f29-8f46-d4e6a904ce30',
    time: 1630508093881,
    sender: 'joe',
    content: 'joke',
  },
  {
    id: '3346f198-e1bf-4894-8af4-e1cf9f4a12af',
    time: 1630508102881,
    sender: 'me',
    content: 'cat',
  },
  {
    id: 'bc5e106b-b4ba-4fae-b44d-f8d1a1900ab0',
    time: 1630508118881,
    sender: 'me',
    content: 'live',
  },
  {
    id: 'fbe9385f-51b6-4fef-95ab-a4716ff19023',
    time: 1630508146881,
    sender: 'joe',
    content: 'mesh',
  },
  {
    id: '867e5f49-db1a-49ec-8ae0-4dfe5a2c5725',
    time: 1630508135881,
    sender: 'uche',
    content: 'server',
  },
  {
    id: '67350eeb-077b-4554-8e47-91669b74aa6a',
    time: 1630508103881,
    sender: 'dave',
    content: 'hello',
  },
  {
    id: '3fb69baa-67ef-4921-b94d-e6e3fd0eebb3',
    time: 1630508103881,
    sender: 'uche',
    content: 'live',
  },
  {
    id: '89c3b9d4-c453-4b9d-b753-dbaef9132063',
    time: 1630508111881,
    sender: 'joe',
    content: 'mounth',
  },
  {
    id: '007c3277-58b7-4a3c-aa45-aab48e657060',
    time: 1630508107881,
    sender: 'dave',
    content: 'cat',
  },
  {
    id: '0685f6f0-58e2-4e09-899a-4658f8909ac0',
    time: 1630508140881,
    sender: 'joe',
    content: 'fuck',
  },
  {
    id: '8efcc9ff-887d-4fec-83bf-e532a6597bf6',
    time: 1630508106881,
    sender: 'me',
    content: 'hello',
  },
  {
    id: 'a9c03204-2884-4a6a-9935-eb6945a0a602',
    time: 1630508096881,
    sender: 'dave',
    content: 'car',
  },
  {
    id: '0e8ce161-dcc4-41a5-872f-57a80abece69',
    time: 1630508097881,
    sender: 'me',
    content: 'tweet',
  },
  {
    id: 'c72e72a3-7a1f-4e4c-8a5e-8a80356bd8fe',
    time: 1630508113881,
    sender: 'joe',
    content: 'serious',
  },
  {
    id: 'f476231f-f498-4dba-b2e3-8f41b88f9b85',
    time: 1630508103881,
    sender: 'joe',
    content: 'silly',
  },
];

export default function ChatScreen() {
  const [msgs, updateMessages] = useState<message[]>(messages);
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
      console.log('update');
      if (listRef) {
        console.log('abtsx');
        listRef.current!.scrollToEnd({animated});
      }
    },
    [listRef],
  );

  const godown = () => {
    if (listRef) {
      console.log('abtsx');
      listRef.current!.scrollToEnd();
    }
  };

  useEffect(() => {
    console.log('called');
    scrollToBottom();
  }, [msgs, scrollToBottom]);

  return (
    <View style={styles.container}>
      <View style={styles.viewhead}>
        <Pressable>
          <FlatList
            horizontal={true}
            data={['uche', 'noel', 'chocho']}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={item => item}
          />
        </Pressable>
      </View>
      <View style={styles.messages}>
        <FlatList
          ref={listRef}
          removeClippedSubviews
          onContentSizeChange={() => godown()}
          data={msgs}
          automaticallyAdjustContentInsets={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>
            item.sender === 'system' ? (
              <View style={styles.sysMsg}>
                <Text>{item.content}</Text>
              </View>
            ) : (
              <View
                style={[
                  item.sender === 'me' ? styles.inMsg : styles.outMsg,
                  styles.msg,
                ]}>
                <Text
                  style={[item.sender !== 'me' ? styles.pmsg : styles.hidden]}>
                  {item.sender}
                </Text>
                <Text>{item.content}</Text>
                <Text>{format(item.time)}</Text>
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
          <Icon name="send" size={24} color="#fff" />
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
    borderColor: 'blue',
    borderWidth: 1,
    padding: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    marginRight: 'auto',
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'grey',
  },
  messages: {
    marginTop: 24,
    marginBottom: 'auto',
    flex: 1,
  },
  msg: {
    borderRadius: 8,
    marginBottom: 8,
  },

  inMsg: {
    marginRight: 16,
    marginLeft: 'auto',
    backgroundColor: 'blue',
    padding: 8,
  },
  outMsg: {
    paddingHorizontal: 8,
    paddingVertical: 4,

    marginLeft: 16,
    marginRight: 'auto',
    backgroundColor: 'green',
  },

  hidden: {
    display: 'none',
  },
  pmsg: {
    color: 'orange',
  },

  sysMsg: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '70%',
    alignItems: 'center',
    padding: 8,
    marginVertical: 8,
  },

  viewhead: {},
});
