import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Send} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';

const renderSend = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => Alert.alert('voice on')}>
        <Icon
          name="mic-outline"
          style={{
            marginBottom: 10,
            marginRight: 16,
            marginTop: 4,
          }}
          size={30}
          color="#CECECE"
        />
      </TouchableOpacity>
      <Send {...props}>
        <Icon
          type="font-awesome"
          name="send"
          style={{
            marginBottom: 10,
            marginRight: 12,
          }}
          size={25}
          color="#0050D1"
        />
      </Send>
    </View>
  );
};

export {renderSend};

const styles = StyleSheet.create({});
