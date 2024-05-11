import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import Icon from 'react-native-vector-icons/Ionicons';
import {renderSend} from '../../components/Input/ChatInput';

const ChatBot = ({navigation}) => {
  useEffect(() => {
    navigation.getParent().setOptions({tabBarStyle: {display: 'none'}});
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: () => (
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="chatbubble-ellipses-outline"
            color={'#fff'}
            size={26}
            style={{marginTop: 1, marginRight: 12}}
          />
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              fontFamily: 'Poppins-Bold',
            }}>
            ChatBot
          </Text>
        </View>
      ),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0050D1',
        height: 60,
      },

      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          {/* <TouchableOpacity>
            <Icon
              name="filter-outline"
              color={'#fff'}
              size={26}
              style={{marginRight: 18}}
            />
          </TouchableOpacity> */}
          <TouchableOpacity>
            <Icon name="volume-high-outline" color={'#fff'} size={26} />
          </TouchableOpacity>
        </View>
      ),
      // headerLeft: () => null,
    });
  }, [navigation]);

  Dialogflow_V2.setConfiguration(
    'newchat@newagent-iedh.iam.gserviceaccount.com',
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDc+NRLQ8eeG8n8\nQNXA1XbdkICAomMOiGiVGR04p7wxchUCexQkCmWn3YXBkl6ChZL2bSbtUF+LTg5r\nCk0JpOXqKaXSTqPZs0MS/eY70X7gWIk3tiLDfCrqCSeOqRx7DuOWovLr64q4tJZ8\nhzdS52sYUGfTjsV3zlx0gcUk+C3QF3IWHv8PkygA0IhO2tDCmFca9mQYolLqFvhu\nZuaC8EWo0SOtYOQuLelzrmg/aPoam/WuIKqzb/JQr7ssghnSyoy3OxUtbHPgxtO/\nJhMJaY7Lj3qo2uzdVHzmfm+o75yiEq1SC5xwrdsIhxDUklYpW416y/3dCfSDa/5/\nGAnA6bIzAgMBAAECggEACVPI2kMf1PEFWKF/+aYeYKyDJWrgADK1KhNSTsbobwng\nEH0Tf5Cfc94qPDPVIMX0oHRBCrleyb7fZZictzB/sp+pa97SlGjjBuqIDQmtxQMt\nCkNPj62Dvjc+tTXhiYw6V8HEZpLzBb2RsJX15DOigKHm5WDcaE83Sy+txlQM0wC7\nml9wNRCRJ7MGbGfg0NsCCBGDqZQ6jmReXqpq8oQHfxUGtpCUfP1irCRXyElOCBwM\niML5XRpJ+jCp8xyC11++deFqFigpMCIlJeLWd3yXMZzDUPEitK4NR//s3aDbhrJ2\nFCaY1/2ikDVwXkef+VSaafs5lGt08hf2PJ4bFuaLwQKBgQDxGBd20MII17huU72u\n/jWUnhA8wDhkpV1fz47mBgpuP1gVVAU0KA2l7EJkXzfCm7KECmJDKNaIAFkLjcnM\n6G0o2ni0hicisdglUD3nOmaM9gabR1DLORSRC7iFaPtqkKuOOKoyNUwBmYZFDmFo\nGTo974ox9zt/bWWSRgxXeIQikwKBgQDqokFoy+bJcVJEinaRZYQ1Wvp52kpE5C44\nX9fClXwwZUKZWmE8M7rO4NC85mpQ7+W2qX74o5YzJU8tX6A2l8OKRVeuNjlg05Az\nmOQg29a9hRbmMdbJxntGUwbcUUD9k5wLhCwcmN3FxILTJE5lcgQnLDg+X456P43H\nsUlq7tHV4QKBgQDP3h608Y6qQxwf+5GK5GDcD2AekPjORgl4xyMEzmaF4ZWXZgbK\njlIeIdKoabRQ1R8YWz+Xegll3y7nGEvKoQck9yClPRlW/5FFsqZ8y8yJcsIFdXqC\njWdfG4TvebFzkuJnUBHmEi/DHVQ4DAsNztp5diNnqysgVfkCIeUYMa9zgwKBgDik\nVOAEoUEuDysmtfrho+nxfZge/2DkKNhJIuABkEpql4pHzENpRYadtSZ1BWNmlnDj\nOBiz/RV5w0Rz2kxzlKvzk3gl9PIQALbECQZ5q7xyvZVyoKRzOt0+O+DB6MuOb9RD\n4xZAPQF6MA7iq95HiQMf5LACB3Yxk3uKq+uZnaRhAoGBAM4AdbwjWPgZzvdosfXP\njEJtbqMxw84AuZVVdvWpICFNNIEcFCkjONHie+1qHOe7zejipsSOY3D9mf7iaGau\nb6Q4CgIanqVRbNZdIgszqT9p4eyjZVPSaWNGL/TVL4+Adf1nC7J12naeF6yO17vJ\n9aXcqkVRUCL0cZkqsX9TYVKk\n-----END PRIVATE KEY-----\n',
    'en',
    'newagent-iedh',
  );

  const BOT = {
    _id: 2,
    name: 'Mr bot',
    avatar:
      'https://media.licdn.com/dms/image/C560BAQFnONLT_8K73g/company-logo_200_200/0/1677663043516?e=2147483647&v=beta&t=E7owycDSzZyMdx-VZiRa2J8h9TyWTLVLIVb5QSKEwDE',
  };
  const initialState = [
    {
      _id: 1,
      name: 'Chatbot',
      text: 'How Can I  Help?',
      createdAt: new Date(),
      user: BOT,
    },
    {
      _id: 2,
      name: 'Chatbot',
      text: 'Hi',
      createdAt: new Date(),
      user: BOT,
    },
  ];

  const [messages, setMessages] = useState(initialState);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
    const userMessage = newMessages[0].text;
    Dialogflow_V2.requestQuery(
      userMessage,
      result => {
        // Handle chatbot response
        const chatbotResponse = result.queryResult.fulfillmentText;
        // Add the chatbot's response to the chat interface
        const botMessage = {
          _id: Math.random().toString(36).substring(7),
          text: chatbotResponse,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Chatbot',
            avatar:
              'https://media.licdn.com/dms/image/C560BAQFnONLT_8K73g/company-logo_200_200/0/1677663043516?e=2147483647&v=beta&t=E7owycDSzZyMdx-VZiRa2J8h9TyWTLVLIVb5QSKEwDE',
          },
        };
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, [botMessage]),
        );
      },
      error => {
        // Handle errors
      },
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <GiftedChat
        quickReplyTextStyle={{color: '#000'}}
        quickReplyStyle={{
          borderRadius: 30,
          borderWidth: 3,
          marginLeft: 12,
          marginRight: 12,
        }}
        optionTintColor="#000"
        messages={messages}
        renderSend={renderSend}
        scrollToBottom={true}
        alwaysShowSend={true}
        showAvatarForEveryMessage
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({});
//https://www.youtube.com/watch?v=mXPp6t7yflA

// F:\Jose\chat_ai\node_modules\react-native-dialogflow\android\build.gradle - change the code
// F:\Jose\chat_ai\node_modules\react-native-gifted-chat\lib\Composer.js - color change #000
