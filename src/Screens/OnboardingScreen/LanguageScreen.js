import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {ICONS} from '../../Constants/icons';
import UniversalButton from '../../Components/universalButton';

const LanguageScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('../../Assets/Icons/background.png')} // Background Image
        style={styles.mainContainer}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Centered Dialog Box */}
        <View style={styles.container}>
          <View style={styles.dialogBox}>
            {/* Overlapping Logo */}
            <View style={styles.logoContainer}>
              <ICONS.logoLanguageIcon style={styles.logo} />
            </View>
            <Text style={styles.languageText}>Select Your Language</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>URDU</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ENGLISH</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <UniversalButton
            label="Onboarding"
            onPress={() => navigation.navigate('OnboardingScreen')}
            buttonStyle={styles.buttonStyle}
            arrowIcon={<ICONS.largeArrow />}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButtonContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  backText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogBox: {
    width: '90%',
    backgroundColor: '#FDF5C9',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logoContainer: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
  },
  languageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A5C24',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#4A5C24',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    justifyContent: 'space-around',
    borderRadius: 30,
  },
});

export default LanguageScreen;
