import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 10,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#2F3A5B',
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
  input: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
   
  },

  contentText: {
    padding: 10,
   
    color: '#fff',
    fontSize: 15,
  },
  navContainer: {
    backgroundColor: '#EC5252',
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navContainer1:{
    backgroundColor: 'grey', padding: 10, width: '100%'
  }
});
export default styles;
