import React from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

import CustomHeader from '../../Components/CustomHeader';
import {ICONS} from '../../Constants/icons';
import UniversalButton from '../../Components/universalButton';

const BackEmailScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Custom Header with Two SVG Icons */}
        <CustomHeader
          BackgroundSvg={ICONS.illustrationHappyIcon}
          SadIconSvg={ICONS.relaxIcon}
          IconStyle={styles.iconStyle}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Success</Text>
          <Text style={styles.subtitle}>
            Please check your email for create a new password
          </Text>
        </View>
        <Text style={styles.signInText}>
          Can't get email? <Text style={styles.reSubmitText}>Resubmit</Text>
        </Text>
        <View style={styles.buttonContainerStyle}>
          <UniversalButton
            buttonStyle={styles.buttonContainerStyle}
            label="Back Email"
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
  iconStyle: {
    marginTop: 40,
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(39, 56, 38, 1)',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(156, 163, 175, 1)',
    marginTop: 10,
    textAlign: 'center',
  },
  inputTextContainer: {
    marginTop: 40,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  signInText: {
    textAlign: 'center',
    color: 'gray',
  },
  reSubmitText: {
    color: 'rgba(61, 83, 0, 1)',
    fontWeight: '700',
  },
  buttonContainerStyle: {
    marginTop: 100,
    borderRadius: 30,
  },
});

export default BackEmailScreen;
