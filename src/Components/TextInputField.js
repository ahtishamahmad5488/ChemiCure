import React, {forwardRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomTextInput = forwardRef(
  (
    {
      value,
      onChangeText,
      placeholder,
      secureTextEntry,
      keyboardType,
      style,
      containerStyle,
      placeholderTextColor,
      maxLength,
      onKeyPress,
      multiline,
    },
    ref,
  ) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onKeyPress={onKeyPress}
          style={[styles.input, style]}
          ref={ref}
          multiline={multiline}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(190, 197, 209, 1)',
    borderRadius: 12,
    color: 'rgba(156, 163, 175, 1)',
    padding: 12,
    fontSize: 16,
    textAlign: 'left',
  },
});

export default CustomTextInput;
