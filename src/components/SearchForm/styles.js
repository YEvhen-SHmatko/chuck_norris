import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchForm_wrap: {
    // height: 80,
    // width: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // backgroundColor: 'rgb(91,91,91)',
    // padding: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  searchForm_input: {
    color: '#fff',
    width: '80%',
    fontSize: 20,
    fontWeight: '400',
    borderColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  searchForm_button: {
    width: '20%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default styles;
