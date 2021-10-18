import React from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8F9F9',
  },
  btnContainer: {
    margin: 10,
    marginStart: 25,
    height: 40,
    width: 90,
    borderRadius: 55,
    backgroundColor: 'rgb(0,141,210)',

    justifyContent: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1.5,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  cardContainer: {
    marginTop: 50,
    margin: 30,
    borderColor: '#fff',
    borderEndWidth: 2,
    borderStartWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 3,
    borderBottomWidth: 2,
    borderWidth: 1,
  },
  cardTitle: {
    color: '#ffffff',
    backgroundColor: '#008DD2',
    padding: 15,
  },
  cardTitle1: {
    color: '#008DD2',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 25,
    textAlign: 'center',
  },
  cardTitle2: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#008DD2',
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  text1: {
    color: '#008DD2',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  paragraph: {
    color: '#fff',
    fontSize: 14,
    padding: 0,
  },
  cardText: {
    backgroundColor: '#89CFF0',
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
export default styles;
