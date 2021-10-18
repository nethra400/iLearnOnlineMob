// import React from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   Button,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import styles from './style';
// export const RegisterScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={{width: '50%', margin: 90, marginBottom: 10, marginTop: 10}}>
//         <ImageBackground
//           source={require('../../images/logo.png')}
//           style={{position: 'relative', height: 100}}></ImageBackground>
//       </View>
//       <Text style={styles.text1}>Welcome to iLearn Online</Text>
//       <Text style={styles.text}>Create New User</Text>

//       <TextInput placeholder="Name" style={styles.input}></TextInput>
//       <TextInput placeholder="Mobile" style={styles.input}></TextInput>

//       <TextInput
//         placeholder="Password"
//         secureTextEntry={true}
//         style={styles.input}></TextInput>
//       <TextInput
//         placeholder="Confirm Password"
//         secureTextEntry={true}
//         style={styles.input}></TextInput>

//       <TouchableOpacity style={styles.buttonContainer}>
//         <Text style={styles.buttonText}>Register </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
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
  name: yup.string().required(),
  mobile: yup
    .string()
    .required()
    .min(10)
    .test('is-num-1-10', ' invalid number ', val => {
      return parseInt(val) < 7 && parseInt(val) > 0;
    }),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().required().min(6),
});
export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '50%', margin: 90, marginBottom: 10, marginTop: 10}}>
        <ImageBackground
          source={require('../../images/logo.png')}
          style={{position: 'relative', height: 100}}></ImageBackground>
      </View>
      <Text style={styles.text1}>Welcome to iLearn Online</Text>
      <Text style={styles.text}>Create New User</Text>

      <Formik
        initialValues={{
          name: '',
          mobile: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={reviewSchema}
        onSubmit={values => {
          console.log(values);
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder=" Name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
              onBlur={props.handleBlur('name')}
            />
            <Text style={styles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>
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
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              icon="lock"
              onChangeText={props.handleChange('confirmPassword')}
              value={props.values.password}
              keyboardType="numeric"
              onBlur={props.handleBlur('confirmPassword')}
            />
            <Text style={styles.errorText}>
              {props.touched.confirmPassword && props.errors.confirmPassword}
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default RegisterScreen;