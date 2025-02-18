import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {ICONS} from '../Constants/icons';

const RoundArrowButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <ICONS.arrowIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: '#3D5300',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 5,
    shadowColor: '#3D5300',
    // shadowOffset: {width: 10, height: 10},
    // shadowOpacity: 0.3,
    // shadowRadius: 60,
  },
});

export default RoundArrowButton;
