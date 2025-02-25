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
    marginVertical: 5,
    marginTop: '8%' ,
    marginBottom: 0,
    width: '100%',
  },
  input: {
    borderWidth: 1.8,
    borderColor: 'rgb(0, 1, 3)',
    borderRadius: 12,
    //color: 'rgba(156, 163, 175, 1)',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 17,
    fontSize: 17,
    textAlign: 'left',
  },
});

export default CustomTextInput;
