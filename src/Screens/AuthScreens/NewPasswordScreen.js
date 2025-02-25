import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../../Components/TextInputField';
import {ICONS} from '../../Constants/icons';
import UniversalButton from '../../Components/universalButton';

const NewPasswordScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Create New Password</Text>
          <Text style={styles.subTitleText}>
            Enter your registered email below
          </Text>
        </View>
      </View>
      <View style={styles.textFieldContainer}>
      <Text style={styles.labelTextField}>New Password</Text>
   
      <CustomTextInput/>
      <Text style={styles.labelTextField}>Confirm Password</Text>
      <CustomTextInput />
        </View>
      <View style={styles.illustrationContainer}>
        <ICONS.SafeFood />
        <UniversalButton
            buttonStyle={styles.buttonContainerStyle}
            label="Submit"
            onPress={() => navigation.navigate('SignInScreen')}
          />
        
        
       
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 18,
  },
  headerContainer: {
    
    marginTop: 10,
  },
  backText: {
    fontSize: 18,
    fontWeight: '700',
  },
  textContainer: {
    marginTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(61, 83, 0, 1)',
    marginTop: 20,
  },
  subTitleText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(156, 163, 175, 1)',
    lineHeight: 21,
    marginTop: 8,
  },
  textFieldContainer: {
    marginTop: 40,
    paddingVertical: 30,
    
  },
  labelTextField: {
 
    fontWeight: 'bold',
    paddingHorizontal: 5,
    marginBottom: -20,
    fontSize: 14,
    lineHeight: 30,
    color: 'rgb(3, 4, 5)',
    marginLeft: 10,
    
  },
  buttonContainerStyle: {
    marginTop: 50,
    height: 60,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'rgb(169, 178, 187)',
   
  },
  illustrationContainer: {
    flex: 1,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
