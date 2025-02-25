import React from 'react';
import { StyleSheet, Text,  
  
   TouchableOpacity, View, 
   ScrollView, ImageBackground } from 'react-native';

import { useState } from 'react';
import CustomTextInput from '../../Components/TextInputField';
import { ICONS } from '../../Constants/icons';

const SignInScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
     
      <ImageBackground
        source={require('../../Assets/Icons/signUp-background.png')} // Replace with the path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          // Title
          <Text style={styles.title}>Create        Account</Text>
         
          // Input fields
          <CustomTextInput
            placeholder="Name"
            keyboardType="default"
            autoCapitalize="none"
            value={name}
            onChangeText={setName}
            />

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
         
          // signIn Button
          <TouchableOpacity  style={styles. signInButton} 
          onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.signInButtonText}>Sign Up </Text> <ICONS.arrowIcon/>
          </TouchableOpacity>
          // signUp Button
          <TouchableOpacity style={styles. signUpButton} 
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signUpButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>   
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
 
  backgroundImage: {
    //flex: 1,
    resizeMode: 'cover', // or 'stretch'
    minHeight: '100%', // Ensure the background covers the entire scrollable area
  },
  container: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 160, // Add some vertical margin for better spacing
  },

  // Title
  title: {
    marginTop: -80,
    fontSize: 50,
    fontWeight: '400',
    marginBottom: 140,
    textAlign: 'left',
    color: '#FFFF',
  },
    // SignUp Button
  signInButton: {
    flexDirection: 'row',
    width: '50%',
    height: '60',
    marginTop: 20,
    backgroundColor: '#3D5300',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center', // Align button content to the right
    marginBottom: 70,
    marginLeft: 'auto' ,
    elevation: 10, // Shadow for Android
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 3,
    
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 17,
    marginRight: '40%' ,
  },
   // Sign In Button
  signUpButton: {
    width: '100%',
    padding: 30,
    marginLeft: '65%' ,
    
    
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Underline the text
  },
},
);

export default SignInScreen;