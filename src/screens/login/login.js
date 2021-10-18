import React from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './style';

const reviewSchema = yup.object({
  mobile: yup
    .string()
    .required()
    .min(10)
    .test('is-num-1-10', ' invalid number ', val => {
      return parseInt(val) < 7 && parseInt(val) > 0;
    }),
  password: yup.string().required().min(6),
});
export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '50%', margin: 90, marginBottom: 20, marginTop: 10}}>
        <ImageBackground
          source={require('../../images/logo.png')}
          style={{position: 'relative', height: 100}}></ImageBackground>
      </View>
      <Text style={styles.text}>Welcome to iLearn Online</Text>
      <Formik
        initialValues={{mobile: '', password: ''}}
        validationSchema={reviewSchema}
        onSubmit={values => {
          console.log(values);
        }}>
        {props => (
          <View>
            <TextInput
            
              style={styles.input}
              placeholder="Mobile"
              onChangeText={props.handleChange('mobile')}
              value={props.values.mobile}
              keyboardType="numeric"
              onBlur={props.handleBlur('mobile')}
              
            />
            <Text style={styles.errorText}>
              {props.touched.mobile && props.errors.mobile}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              icon="lock"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              keyboardType="numeric"
              onBlur={props.handleBlur('password')}
            />
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default LoginScreen;