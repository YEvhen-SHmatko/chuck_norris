import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import types from '../redux/types';
import styles from './styles';
import NavBar from '../components/NavBar';
import SearchForm from '../components/SearchForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: types.GET_RANDOM_JOKE_START});
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <NavBar />
      <SearchForm />
    </View>
  );
};
export default App;
