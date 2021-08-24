import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Bell from '../../components/icons/Bell';
import Coins from '../../components/icons/Coins';

export default function ChatList() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <UserAvatar />
          <UserMeta>
            <Text>asenwibor</Text>
            <UserPoints>
              <Coins />
              <Text>800,000</Text>
            </UserPoints>
          </UserMeta>
        </UserInfo>

        <TouchableOpacity onPress={() => console.log('toggle notification')}>
          <Bell />
        </TouchableOpacity>
      </Header>

      <TopTab>
        <Tab />
        <Tab />
      </TopTab>

      <Rooms>
        <Text>rooms</Text>
      </Rooms>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #212529;
`;

const Header = styled.View`
  padding: 16px;
  height: 100px;
  flex-direction: row;
  border: 1px solid red;
  justify-content: space-between;
`;

const UserInfo = styled.View`
  width: 40%;
  flex-direction: row;
`;

const UserAvatar = styled.View`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border: 1px solid red;
  border-radius: 25px;
`;

const UserMeta = styled.View``;

const UserPoints = styled.View`
  flex-direction: row;
`;

const TopTab = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
`;

const Tab = styled.View`
  width: 160px;
  height: 48px;
  border-radius: 8px;
  background-color: purple;
`;

const Rooms = styled.View`
  background-color: #343a40;
  width: 100%;
  height: auto;
  border-radius: 24px;
  height: 100%;
`;
