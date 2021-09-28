import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#2F3A5B',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    justifyContent: 'center',
    marginBottom: 5,
    textAlign: 'center',
  },
  text1: {
    fontSize: 28,
    color: '#fff',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    paddingLeft: 10,
    height: 50,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 5,
    borderColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },

  buttonText: {
    textAlign: 'center',
    color: '#2F3A5B',
    fontSize: 23,
  },
  buttonContainer: {
    marginTop: 10,
    height: 50,
    backgroundColor: '#EC5252',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1.5,
  },
  errorText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 0,
    marginStart: 5,
    justifyContent: 'flex-start',
  },
});
export default styles;
