import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
UniversalButton;
import {useNavigation} from '@react-navigation/native';
import {ICONS} from '../../Constants/icons';
import UniversalButton from '../../Components/universalButton';
const OnboardingScreen = ({navigation}) => {
  return (
    
      <ImageBackground
              source={require('../../Assets/Icons/Onbording-background.png')} // Background Image
              style={styles.backgroundContainer}>

      <View style={styles.mainContainer}>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Let's Begin Your Smart Farming Journey
          </Text>
          {/* Subtitle */}
          <Text style={styles.subtitleText}>
            Empowering Farmers Through Smart Technology
          </Text>

          {/* Get Started Button */}
          <View style={styles.buttonContainer}>
            <UniversalButton
              label="GET STARTED"
              onPress={() => navigation.navigate('SignInScreen')}
              buttonStyle={styles.buttonStyle}
              arrowIcon={<ICONS.largeArrow />}
            />
          </View>
        </View>
      </View>
      </ImageBackground>
 
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 20,
    paddingTop: '127%',
  },

  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3D5300',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitleText: {
    fontSize: 18,
    color: '#00000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
  },
  buttonStyle: {
   
    paddingVertical: 20,
    paddingHorizontal: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 40,
    justifyContent: 'space-around',
  
  },
});

export default OnboardingScreen;
