import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
const FormInput = ({
  value,
  label,
  onChangeText,
  onBlur,
  style,
  error,
  touched,
}) => {
  return (
    <>
      <TextInput
        activeOutlineColor="#000"
        label={label}
        mode="outlined"
        contentStyle={{color: '#000'}}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        outlineStyle={[
          error && touched ? styles.errorInput : styles.input,
          {style},
        ]}
        style={styles.bodyInput}
        right={
          <TextInput.Icon
            // eslint-disable-next-line react/no-unstable-nested-components
            icon={() =>
              !error && touched ? (
                <Icon name="checkmark-outline" color={'#2358FB'} size={26} />
              ) : null
            }
            size={26}
            style={styles.inputIcon}
            color={'#2358FB'}
          />
        }
      />
      {error && touched ? (
        <Text
          style={{color: 'red', marginLeft: 20, fontFamily: 'Poppins-Regular'}}>
          {error}
        </Text>
      ) : null}
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    borderColor: '#B7AFA4',
    borderWidth: 1,
  },
  errorInput: {
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    borderColor: 'red',
    borderWidth: 1,
  },
  bodyInput: {
    paddingStart: 12,
    marginTop: 0,
    marginBottom: 15,
    height: 45,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#fff',
    color: '#000',
  },
  inputIcon: {
    marginLeft: -16,
  },
  label: {
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  errorLabel: {
    color: 'red',
    fontFamily: 'Poppins-Regular',
  },
});
