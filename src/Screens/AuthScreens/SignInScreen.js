import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {useState} from 'react';
import CustomTextInput from '../../Components/TextInputField';
import {ICONS} from '../../Constants/icons';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ImageBackground
      source={require('../../Assets/Icons/signIn-background.png')} // Replace with the path to your image
      style={styles.backgroundImage}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        // Input fields
        <CustomTextInput
          placeholder="Email/Username"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextInput
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.forgetButton}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgetButtonText}>Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.signInButtonText}>Sign In </Text>{' '}
          <ICONS.arrowIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    minHeight: '100%', // Ensure the background covers the entire scrollable area
  },
  container: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 130, // Add some vertical margin for better spacing
  },
  // bcak button style
  backButtonContainer: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  backText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'left',
    color: '#3D5300',
  },

  signInButton: {
    flexDirection: 'row',
    width: '50%',
    height: '60',
    marginTop: 20,
    backgroundColor: '#3D5300',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center', // Align button content to the right
    marginBottom: 150,
    marginLeft: 'auto',
    elevation: 10, // Shadow for Android
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 5,
    shadowRadius: 3,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 17,
    marginRight: '40%',
  },

  forgetButton: {
    marginTop: 5,
    marginBottom: 0,
    marginLeft: '50%',
  },

  forgetButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  signUpButton: {
    width: '100%',
    padding: 30,
    marginLeft: '65%',
  },

  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Underline the text
  },
});

export default SignInScreen;
