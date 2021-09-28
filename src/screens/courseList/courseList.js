import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground
} from 'react-native';
export default class App extends PureComponent {
    constructor (props){
        super(props)
        this.state={
            items:[]
        }
    }
    componentDidMount(){
        this.getDataFromApi()
    }
    getDataFromApi=async()=>{
        const endpoint='https://jsonplaceholder.typicode.com/photos?_limit=20'
        const res= await fetch(endpoint)
        const data=await res.json()
        this.setState({items:data})
    }

  _renderItem = ({item, index}) => {
    return (

      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
           uri:item.url}}
        />
        <Text style={styles.cardText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  render() {
      let {container}=styles
      let {items}= this.state
    return (
      <View style={{marginTop: 40,height:"100%" }}>
        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>

          <Text style={{fontSize:18,}}> MyCourses</Text>
          <Text style={{fontSize:18,}}>  Explore Courses</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      <FlatList

        style={styles.container}
numColumns={2}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  cardText: {
    fontSize: 15,
    padding: 10,

    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '95%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
      resizeMode: 'cover',
    },
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  buttonContainer: {

    marginStart:45,
    height: 45,
    width:100,
    borderRadius: 55,
    backgroundColor: '#3BB2D0',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1.5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#00273A',
    fontSize: 18,

  },
});
