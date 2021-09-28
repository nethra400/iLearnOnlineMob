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
    fontSize: 28,
    color: '#fff',
    justifyContent: 'center',
    marginBottom: 60,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    paddingLeft: 20,
    borderRadius: 50,
    height: 50,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 5,
    borderColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },

  buttonText: {
    textAlign: 'center',
    color: '#2F3A5B',
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 20,
    height: 50,
    borderRadius: 50,
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
    fontSize:14,
    marginBottom: 1,
    marginTop:5,
    marginStart: 10,
    justifyContent: 'flex-start',
  },
});
export default styles;
