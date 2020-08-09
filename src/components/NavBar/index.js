import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const NavBar = () => {
  return (
    <View style={styles.navBar_wrap}>
      <Text style={styles.navBar_title}>NavBar</Text>
    </View>
  );
};

export default NavBar;
