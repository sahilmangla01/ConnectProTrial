import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Assessment from '../../screens/Assessment/Assessment';
import Quiz from '../../screens/Assessment/Quiz';

const AssessmentNavigator = () => {
  const AssessmentStack = createNativeStackNavigator();
  return (
    <AssessmentStack.Navigator
      screenOptions={{headerShown: true, statusBarColor: '#0050D1'}}>
      <AssessmentStack.Screen name="Assessment" component={Assessment} />
      <AssessmentStack.Screen name="Quiz" component={Quiz} />
    </AssessmentStack.Navigator>
  );
};

export default AssessmentNavigator;
