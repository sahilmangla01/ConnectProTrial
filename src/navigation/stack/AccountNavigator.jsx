import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Account/Profile';
import About from '../../screens/Account/About';
import Settings from '../../screens/Account/Settings';
import Notification from '../../screens/Account/Notification';
import EditProfile from '../../screens/Account/EditProfile';
import Experience from '../../screens/Auth/Experience';

const AccountNavigator = () => {
  const AccountStack = createNativeStackNavigator();
  return (
    <AccountStack.Navigator
      screenOptions={{headerShown: false, statusBarColor: '#0050D1'}}>
      <AccountStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: true, statusBarColor: '#0050D1'}}
      />
      <AccountStack.Screen
        name="About"
        component={About}
        options={{headerShown: true, statusBarColor: '#0050D1'}}
      />
      <AccountStack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: true, statusBarColor: '#0050D1'}}
      />
      <AccountStack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: true, statusBarColor: '#0050D1'}}
      />
      <AccountStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: true, statusBarColor: '#0050D1'}}
      />
      <AccountStack.Screen
        name="Experience"
        component={Experience}
        options={{headerShown: true, statusBarColor: '#0050D1'}}
      />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
