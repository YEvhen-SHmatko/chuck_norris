import React from 'react';
import styles from './styles';
import {View, Button} from 'react-native';
import CheckBox from '../CheckBox';
const SearchForm = () => {
  return (
    <View style={styles.searchForm_wrap}>
      <CheckBox />
    </View>
  );
};

export default SearchForm;
