import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Divider, Button, Icon} from 'react-native-paper';
import KeyboardView from '../../components/Container/TabView';

const ChatSplash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.viewTitle}>Your AI Assistant</Text>
        <Text variant="titleMedium" style={styles.viewTitle1}>
          Using this software, you can ask your questions and receive articles
          using an artificial intelligence assistant
        </Text>
        <Image
          source={require('../../assets/images/chatImg.png')}
          style={styles.viewImage}
        />
        <View style={styles.ViewButton}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('ChatBot')}
            style={styles.ViewButton1}
            labelStyle={styles.buttonText}>
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ChatSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle: {
    fontFamily: 'Poppins-Bold',
    color: '#00296B',
    fontSize: 30,
    textAlign: 'center',
  },
  viewTitle1: {
    marginTop: 2,
    fontSize: 16,
    color: '#757575',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  viewImage: {
    marginTop: 22,
  },
  ViewButton: {
    marginTop: 30,
    width: '90%',
  },
  ViewButton1: {
    padding: 6,
    width: 300,
    backgroundColor: '#00296B',
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
