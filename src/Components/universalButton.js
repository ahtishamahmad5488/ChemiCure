import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const UniversalButton = ({
  label,
  onPress,
  showArrow = true,
  buttonStyle,
  textStyle,
  arrowIcon, // Arrow SVG ya koi bhi icon as a prop
}) => {
  return (
    // Button Component
    <TouchableOpacity
      style={[styles.button, buttonStyle]} // Apply default and custom styles
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{label}</Text>

      {/* Check karo agar arrowIcon aya ho to usko render karo */}
      {showArrow && arrowIcon ? (
        <View style={styles.iconContainer}>{arrowIcon}</View>
      ) : null}
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3D5300', // Default background color
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 10, // Shadow for Android
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 5,
    shadowRadius: 3,
  },
  text: {
    color: '#FFFFFF', // Default text color
    fontSize: 19,
    fontWeight: '600', // Semi-bold
  },
  iconContainer: {
    marginLeft: 10, // Space between text and icon
  },
});

export default UniversalButton;
