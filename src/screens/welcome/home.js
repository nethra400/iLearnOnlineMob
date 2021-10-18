import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  vatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import styles from './style';

 const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{width: '30%', marginTop: 5}}>
          <ImageBackground
            source={require('../../images/logo.png')}
            style={{height: 60}}></ImageBackground>
        </View>
        {/* <Text style={{fontSize: 18, paddingTop: 20, marginStart: 10}}>
          Home{' '}
        </Text> */}

        {/* <Text style={{fontSize: 18, paddingTop: 20}}> Courses</Text>

        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity> */}
      </View>

      <View style={{marginTop: 10}}>
        <ImageBackground
          source={require('../../images/landingimage.png')}
          style={{height: 400}}>
          <Card style={styles.cardContainer}>
            <Title style={styles.cardTitle}>Why I Learn</Title>
            <Card.Content style={{backgroundColor: '#008DD2', padding: 15}}>
              <Paragraph style={styles.paragraph}>
                ‘I Learn ’ is an online database and data warehousing training
                website designed for corporate employees, individuals and job
                seekers.All the training sessions are based on scenarios as it
                is a proven methodology.
              </Paragraph>
              <Paragraph style={styles.paragraph}>
                While the assignments make the training more interactive,
                quizzes help to fine tune your knowledge.
              </Paragraph>
            </Card.Content>
          </Card>
        </ImageBackground>
      </View>
      <View style={{padding: 70}}>
        <Text style={styles.cardTitle1}>I Learn</Text>
        <Text style={styles.text}>
          E-learning portal for database and data warehousing technologies
        </Text>
        <ImageBackground
          source={require('../../images/image1.png')}
          style={{position: 'relative', height: 300}}></ImageBackground>
        <Text style={styles.cardTitle2}>Need for online Education</Text>
        <Text>
          As an individual or a company its very important to access the
          information online now a days to make you more productive. E-learning
          makes it more efficient to learn only the things you needed rather
          than sitting in the class and listen to what you already known.
        </Text>

        <Text
          style={{
            paddingTop: 10,
          }}>
          What we teach in the class room session, we capture the same using
          Audio and video. Any questions you have in the material or examples
          what we provide, you can send us an email or call us to get the
          questions clarified.
        </Text>
        <Card
          style={{
            marginTop: 40,
          }}>
          <Text style={styles.cardText}>Testimonials</Text>

          <Card.Content style={{backgroundColor: '#89CFF0'}}>
            <Paragraph style={{fontSize: 14}}>
              "The methodological approach is fantastic backed with a robust
              tools combination. I would recommend Aroha Technologies to anyone.
              It’s quite useful in getting a job. Aroha has proved to be of
              tremendous contribution in my current M.Sc programme in Management
              Information Systems at Coventry University."
            </Paragraph>
            <Text style={styles.text1}>Yemi Jide</Text>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};
export default Home;