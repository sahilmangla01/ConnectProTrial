import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../../screens/Dashboard/Search';
import Hiring from '../../screens/Dashboard/Hiring';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Feedback from '../../screens/Dashboard/Feedback';
import Status from '../../screens/Dashboard/Status';
import Filter from '../../screens/Dashboard/Filter';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false, statusBarColor: '#0050D1'}}>
      <HomeStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: true, statusBarColor: '#0050D1'}}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Filter"
        component={Filter}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Hiring"
        component={Hiring}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Status"
        component={Status}
        options={{headerShown: true}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
