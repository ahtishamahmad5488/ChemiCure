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
    <ScrollView style={{flexGrow: 1}}>
      <View style={styles.mainContainer}>
        <View style={styles.Logo}>
          <ICONS.bgOnboardingIcon />
        </View>
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
              onPress={() => navigation.navigate('ForgotPasswordScreen')}
              buttonStyle={styles.buttonStyle}
              arrowIcon={<ICONS.largeArrow />}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'fff',
  },
  Logo: {
    backgroundColor: 'rgba(128, 167, 20, 1)',
    height: '70%',
    borderBottomLeftRadius: 34,
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
    width: '90%',
  },
  buttonStyle: {
    justifyContent: 'space-around',
    borderRadius: 30,
  },
});

export default OnboardingScreen;
