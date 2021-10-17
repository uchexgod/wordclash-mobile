import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import AppleIcon from '../../components/icons/Apple';
import GoogleIcon from '../../components/icons/Google';

import {theme} from '../../theme';

function Login() {
  // const [boxShowing, showBox] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.bitTcontain}>
        <Text style={styles.bigT}>word</Text>
        <Text style={styles.bigT}>clash</Text>
      </View>

      <View style={styles.buttonBox}>
        <Pressable style={styles.button}>
          <Text style={styles.txt}>PLAY</Text>
        </Pressable>
      </View>

      <View style={[styles.socialButtons, {display: 'none'}]}>
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
    borderColor: '#e9c46a',
    borderWidth: 2,
    alignItems: 'center',
    shadowColor: '#e9c46a',
    shadowRadius: 0.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 8,
    },
  },

  bitTcontain: {},
  bigT: {
    fontSize: 100,
    fontWeight: '900',
    lineHeight: -13,
    fontFamily: 'Inter-ExtraBold',
    color: '#fff',
    textShadowColor: '#9A6FDA',
    textShadowOffset: {
      width: -5,
      height: 5,
    },
    textShadowRadius: 5,
    margin: 15,
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
