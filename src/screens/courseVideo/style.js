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
  },
  buttonContainer: {

        marginStart:45,
        height: 35,
        width:100,
        borderRadius: 55,
        backgroundColor: '#2F3A5B',
        justifyContent: 'center',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1.5,
      },
      buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    
      },
});
export default styles;
