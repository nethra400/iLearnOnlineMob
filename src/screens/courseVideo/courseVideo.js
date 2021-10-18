import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';

// import  Icon  from 'react-native-vector-icons/Icon';

import styles from './style';

export const CourseVideo = () => {
  const [topics, setTopics] = useState([
    {name: 'Introduction', id: 1},
    {name: 'Expectation from you', id: 2},
    {name: 'What is Data?', id: 3},
    {name: 'Entities', id: 4},
    {name: 'Visualizing Retail Business', id: 5},
    {name: 'Databases', id: 6},
    {name: 'Types of Databases', id: 7},
    {name: 'Relational DBMS', id: 8},
    {name: 'RDBMS products in market', id: 9},
    {name: 'Three types of relationships', id: 10},
    {name: 'Entities and relationships-examples', id: 11},
    {name: 'Visualizing Data', id: 12},
    {name: 'Tables in RDBMS', id: 13},
  ]);
  const pressHandler = id => {
    console.log(id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Text style={styles.text}>Home</Text>
        <Text style={styles.text}> Courses</Text>
        <Text style={styles.text}> Contact Us</Text>
        <TouchableOpacity style={styles.buttonContainer}>
             <Text style={styles.buttonText}>LogOut</Text>
          </TouchableOpacity>
      </View>
      
      <View
        style={{
          width: '60%',
          margin: 90,
          marginBottom: 10,
          marginTop: 10,
          marginHorizontal: 75,
        }}>
       
      </View>
      <Text style={{color: '#fff', margin: 10}}> Contents</Text>

      <FlatList
        keyExtractor={item => item.id}
        data={topics}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            {/* <Icon name="forward" color={'#fff'} size={15} /> */}
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.contentText}>
                {'* '} {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
{
  
}
