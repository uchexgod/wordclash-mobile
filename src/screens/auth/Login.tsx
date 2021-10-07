import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import Svg, {Text as Txt} from 'react-native-svg';
import AppleIcon from '../../components/icons/Apple';
import GoogleIcon from '../../components/icons/Google';

import {theme} from '../../theme';

function Login() {
  return (
    <View style={styles.container}>
      <Svg height="60" width="300">
        <Txt
          fill="none"
          stroke="#7952B3"
          fontSize="58"
          strokeWidth="2"
          fontFamily="Inter-ExtraBold"
          x="150"
          y="50"
          textAnchor="middle">
          wordclash
        </Txt>
      </Svg>

      <View style={styles.buttonBox}>
        <Pressable style={styles.button}>
          <Text style={styles.txt}>PLAY</Text>
        </Pressable>
      </View>

      <View style={styles.socialButtons}>
        <Pressable style={styles.socButton}>
          <GoogleIcon />
          <Text style={styles.btnTxt}>Log In with Google</Text>
        </Pressable>
        <Pressable style={styles.socButton}>
          <AppleIcon />
          <Text style={styles.btnTxt}>Log In with Apple</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.darkGrey,
  },

  bigIntro: {
    fontSize: theme.typo.bigText,
    fontWeight: '800',
    lineHeight: 58,
  },
  textBox: {
    alignItems: 'center',
    margin: 20,
  },
  buttonBox: {
    height: 300,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#9A6FDA',

    padding: 10,
    height: 70,
    minWidth: 330,
    borderRadius: 12,
    marginTop: 94,
    justifyContent: 'center',
    margin: 5,
    alignItems: 'center',
  },

  socialButtons: {
    height: 370,
    backgroundColor: theme.colors.lightGrey,
    width: '100%',
    position: 'absolute',
    bottom: -10,
    alignItems: 'center',

    borderRadius: 12,
  },
  socButton: {
    height: 54,
    backgroundColor: '#000000',
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',

    width: 329,
    borderRadius: 10,
  },

  btnTxt: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 16,
  },

  txt: {
    color: '#fff',
    fontSize: 24,

    fontFamily: 'Inter-ExtraBold',
  },
});

export default Login;
