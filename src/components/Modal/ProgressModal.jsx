import {StyleSheet, text, View, Image} from 'react-native';
import React from 'react';
import RNModal from 'react-native-modal';
import {Button, TextInput, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function ProgressModal() {
  const {isLoading} = useSelector(state => state.common);

  return (
    <RNModal
      isVisible={isLoading}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}>
      <View style={styles.container}>
        <View style={styles.model}>
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: 'https://www.radiocity.in/assets/images/loading.gif',
              }}
              style={{width: 200, height: 100}}
            />
          </View>

          {/* <View style={styles.Button}>
            <Button
              mode="contained"
              labelStyle={{color: '#fff'}}
              style={styles.Button2}
              onPress={onSubmit}>
              Continue
            </Button>
          </View> */}
        </View>
      </View>
    </RNModal>
  );
}
export default ProgressModal;

const styles = StyleSheet.create({
  container: {
    margin: 2,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000',
    borderRadius: 30,
  },
  model: {
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 20,
  },
  textModel: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  Button: {
    paddingTop: 15,
  },
  Button2: {
    borderRadius: 10,
    backgroundColor: 'blue',
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 100,
    marginRight: 100,
    padding: 10,
  },
});
