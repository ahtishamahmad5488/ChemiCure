import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RoundArrowButton from '../../Components/RoundArrowButton';
import {ICONS} from '../../Constants/icons';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('../../Assets/Icons/background.png')}
        style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.toText}>To</Text>
          <Text style={styles.titleText}>Chemi Cure!</Text>
          <RoundArrowButton
            onPress={() => navigation.navigate('LanguageScreen')}
          />
          <ICONS.characterIcon style={styles.characterIcon} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 18,
  },
  textContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: '700',
    color: '#3D5300',
  },
  toText: {
    fontSize: 40,
    fontWeight: '900',
    color: '#3D5300',
    marginVertical: -8,
  },
  titleText: {
    fontSize: 44.5,
    fontWeight: '900',
    color: '#3D5300',
  },
  // characterIcon: {
  //   backgroundColor: 'black',
  // },
});

export default WelcomeScreen;
