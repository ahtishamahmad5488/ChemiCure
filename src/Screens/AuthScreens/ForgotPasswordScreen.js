import React from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

import CustomHeader from '../../Components/CustomHeader';
import {ICONS} from '../../Constants/icons';
import UniversalButton from '../../Components/universalButton';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Custom Header with Two SVG Icons */}
        <CustomHeader
          title="Forget Password"
          BackgroundSvg={ICONS.illustrationSadIcon}
          SadIconSvg={ICONS.sadIcon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Enter your registered email below</Text>
        </View>

        <View style={styles.inputTextContainer}>
          <Text style={styles.label}>Email address</Text>
          <TextInput style={styles.input} placeholder="Enter Email" />
          <Text style={styles.signInText}>
            Remember the password?{' '}
            <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </View>
        <View style={styles.buttonContainerStyle}>
          <UniversalButton
            buttonStyle={styles.buttonContainerStyle}
            label="Submit"
            onPress={() => navigation.navigate('NewPasswordScreen')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(39, 56, 38, 1)',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(156, 163, 175, 1)',
    marginTop: 4,
  },
  inputTextContainer: {
    marginTop: 40,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: '23%',
    borderWidth: 1.5,
    borderColor: '#000',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  signInText: {
    textAlign: 'center',
    color: 'gray',
  },
  signInLink: {
    color: '#556B2F',
    fontWeight: 'bold',
  },
  buttonContainerStyle: {
    alignSelf: 'center',
    marginTop: 50,
    width: '90%',
    height: 60,
    borderRadius: 20,
  },
});

export default ForgotPasswordScreen;
