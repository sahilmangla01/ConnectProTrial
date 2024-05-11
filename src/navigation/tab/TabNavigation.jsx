import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Dashboard from '../../screens/Dashboard/Dashboard';
import HomeNavigator from '../stack/HomeNavigator';
import ChatSplash from '../../screens/Chat/ChatSplash';
import ChatBot from '../../screens/Chat/ChatBot';
import ChatNavigator from '../stack/ChatNavigator';
import {Button} from 'react-native-paper';
import Profile from '../../screens/Account/Profile';
import Analysis from '../../screens/Dashboard/Analysis';
import AssessmentNavigator from '../stack/AssessmentNavigator';
import AccountNavigator from '../stack/AccountNavigator';
import {useSelector} from 'react-redux';
import PostJob from '../../screens/Recruiter/PostJob';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const {user} = useSelector(state => state.users);
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbox-ellipses-outline'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'Assessment') {
            iconName = focused
              ? 'document-text-outline'
              : 'document-text-outline';
          } else if (route.name === 'Analysis') {
            iconName = focused ? 'analytics-outline' : 'analytics-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person-outline' : 'person-outline';
          } else if (route.name === 'PostJob') {
            iconName = focused ? 'add-outline' : 'add-outline';
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              style={{
                backgroundColor: focused ? '#fff' : 'transparent',
                padding: 2,
                borderRadius: 30,
              }}
            />
          );
        },
        tabBarHideOnKeyboard: true,
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#FA7902',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#0050D1',
          borderColor: '#fff',
          borderWidth: 0,
          elevation: 4,
          height: 60,
          borderRadius: 0,
          bottom: 0, //5
          marginLeft: 0, // 12
          marginRight: 0, // 12
        },
        tabBarLabelStyle: {
          color: navigation.isFocused() ? 'tomato' : '#fff',
          fontFamily: 'Poppins-Medium',
          marginBottom: 2,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{headerShown: false, title: 'Home'}}
      />
      {user?.role === 'Candidate' ? (
        <Tab.Screen
          name="Assessment"
          component={AssessmentNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <Tab.Screen
          name="PostJob"
          component={PostJob}
          options={{headerShown: false, title: 'Post'}}
        />
      )}

      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{headerShown: false}}
      />

      <Tab.Screen name="Analysis" component={Analysis} />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
