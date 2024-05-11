import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatSplash from '../../screens/Chat/ChatSplash';
import ChatBot from '../../screens/Chat/ChatBot';

const ChatNavigator = () => {
  const ChatStack = createNativeStackNavigator();
  return (
    <ChatStack.Navigator
      screenOptions={{headerShown: false, statusBarColor: '#0050D1'}}>
      <ChatStack.Screen name="ChatSplash" component={ChatSplash} />
      <ChatStack.Screen
        name="ChatBot"
        component={ChatBot}
        options={{headerShown: true}}
      />
    </ChatStack.Navigator>
  );
};

export default ChatNavigator;
