import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const BackHeader = ({navigation, title}) => {
  return (
    <>
      <LinearGradient
        colors={['#0050D1', '#00296B', '#00296B', '#0050D1']}
        start={{x: 12, y: 0}}
        end={{x: 12, y: 0}}
        style={{height: 52, flexDirection: 'row', paddingTop: 6}}>
        {/* <Button
          textColor="#fff"
          // eslint-disable-next-line react/no-unstable-nested-components
          icon={() => (
            <Icon name="chevron-back-outline" color={'#fff'} size={31} />
          )}
          mode="text"
          style={styles.buttonOutline}
          labelStyle={styles.buttonText}
          onPress={() => navigation.goBack()}>
          {title}
        </Button> */}
        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" color={'#fff'} size={30} />
        </TouchableOpacity>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  buttonOutline: {
    marginLeft: 12,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginLeft: 2,
    color: '#fff',
  },
});
