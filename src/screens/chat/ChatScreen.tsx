import React from 'react';
import {FlatList} from 'react-native';

import styled from 'styled-components/native';
import Text from '../../components/elements/Text';

const DATA = [{id: 1, messge: 'uche! hey', sender: 'noel'}];

export default function ChatScreen() {
  return (
    <Wrapper>
      <Header activeOpacity={1}>
        <UserAvatar />
      </Header>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.messge}</Text>}
      />
      <Foot />
    </Wrapper>
  );
}

const UserAvatar = styled.View`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border: 2px solid #fe9923;
  border-radius: 25px;
`;

const Wrapper = styled.View`
  background-color: #343a40;
  flex: 1;
`;

const Header = styled.TouchableOpacity`
  height: 60px;
  background-color: #212529;
  /* border-bottom-color: red;
  border-bottom-width: 1px;
  border: 1px solid red; */
`;

const Foot = styled.View`
  border: 1px solid red;
  height: 100px;
`;
