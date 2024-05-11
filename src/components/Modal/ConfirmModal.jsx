import {View, StyleSheet} from 'react-native';
import React from 'react';
import RNModal from 'react-native-modal';
import {TextInput, Text, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';

function ConfirmModal({onSubmit, onCancel}) {
  const {isModal} = useSelector(state => state.common);
  return (
    <RNModal
      isVisible={isModal}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text variant="titleLarge" style={styles.title}>
            Logout
          </Text>
          <Text variant="titleSmall" style={styles.des}>
            Are you sure you want to logout
          </Text>
          <View style={styles.button}>
            <Button
              mode="contained"
              onPress={onCancel}
              style={[styles.buttonContainer, styles.cancel]}>
              <Text style={{color: 'blue', fontFamily: 'Poppins-Medium'}}>
                Cancel
              </Text>
            </Button>
            <Button
              labelStyle={{fontFamily: 'Poppins-Medium'}}
              mode="contained"
              style={styles.buttonContainer}
              onPress={onSubmit}>
              Logout
            </Button>
          </View>
        </View>
      </View>
    </RNModal>
  );
}

export default ConfirmModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    borderWidth: 1,
    padding: 20,
    width: 300,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Poppins-Medium',
  },
  des: {
    paddingTop: 15,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    backgroundColor: '#E72929',
    borderRadius: 10,
    paddingRight: 11,
    paddingLeft: 11,
  },
  cancel: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    // color:'pink'
  },
});
