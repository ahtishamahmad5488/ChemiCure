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
        <CustomTextInput />
        <Text style={styles.labelTextField}>Confirm Password</Text>
        <CustomTextInput />
      </View>
      <View style={styles.illustrationContainer}>
        <ICONS.SafeFood />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
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
    marginTop: 6,
  },
  textFieldContainer: {
    marginTop: 40,
    paddingVertical: 30,
  },
  labelTextField: {
    fontSize: 14,
    lineHeight: 36,
    color: 'rgba(156, 163, 175, 1)',
    marginLeft: 10,
  },
  illustrationContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
