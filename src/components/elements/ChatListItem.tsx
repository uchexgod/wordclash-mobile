import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import styled from 'styled-components/native';
import Coins from '../icons/Coins';
import CrownIcon from '../icons/Crown';
import FlashIcon from '../icons/FlashIcon';
import PlayersIcon from '../icons/Players';
import PulseIcon from '../icons/PulseIcon';

type Props = {
  item: ListItem;
  onPress: () => void;
};

export type ListItem = {
  id: string;
  title: string;
  top: string;
  words: string;
  active: boolean;
};

export const ChatListItem = ({item, onPress}: Props) => {
  return (
    <Wrapper onPress={onPress}>
      <Text style={styles.headText}>{item.title.toLocaleUpperCase()}</Text>

      <View style={styles.roomInfo}>
        <View style={styles.metaLabel}>
          <PlayersIcon style={styles.metaIcon} />
          <Text style={styles.metaText}>200</Text>
        </View>

        <View style={styles.metaLabel}>
          <CrownIcon style={styles.metaIcon} />
          <Text style={styles.metaText}>asenwibor</Text>
        </View>

        <View style={styles.metaLabel}>
          <FlashIcon />
          <FlashIcon />
          <FlashIcon />
        </View>

        <View style={styles.metaLabel}>
          <Coins style={styles.metaIcon} />
          <Text style={styles.metaText}>90</Text>
        </View>

        <View style={styles.metaLabel}>
          <PulseIcon />
        </View>
      </View>
    </Wrapper>
  );
};

const Wrapper = styled.Pressable`
  padding: 16px;
`;

const styles = StyleSheet.create({
  roomInfo: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  metaIcon: {
    marginRight: 8,
  },
  metaText: {
    color: '#747576',
  },

  metaLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headText: {
    color: '#fff',
  },
});
