import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native-paper';

const Protected = props => {
  const {navigation} = props;
  const detectLogin = async () => {
    await AsyncStorage.getItem('role')
      .then(role => {
        if (role === 'Candidate' || role === 'Recruiter') {
          navigation.replace('tab');
        } else {
          navigation.replace('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={{
          uri: 'https://www.radiocity.in/assets/images/loading.gif',
        }}
        style={{width: 200, height: 100}}
      />
    </View>
  );
};

export default Protected;
