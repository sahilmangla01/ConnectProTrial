import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Timeline from 'react-native-timeline-flatlist';
import Icon from 'react-native-vector-icons/Ionicons';
import BackHeader from '../../components/Header/BackHeader';
import ScreenView from '../../components/Container/ScreenView';

const Status = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="My Status" />,
      statusBarColor: '#00296B',
    });
  }, [navigation]);

  const timeLineData = [
    {
      title: 'Applied',
      description: 'Jan 21',
      icon: require('../../assets/images/success.png'),
    },
    {
      title: 'Application Sent',
      description: 'Jan 21',
      icon: require('../../assets/images/success.png'),
    },
    {
      title: 'Application Viewed',
      description: 'Jan 21',
      icon: require('../../assets/images/success.png'),
    },
    {
      title: 'Resume Viewed',
      description: 'Jan 21',
      icon: require('../../assets/images/success.png'),
    },
    {
      title: 'Awaiting recruiter action',
      description: 'Jan 21',
      icon: require('../../assets/images/cancel.png'),
    },
  ];
  return (
    <ScreenView style={styles.container}>
      <Timeline
        data={timeLineData}
        circleColor="green"
        rowContainerStyle={{minHeight: 100}}
        lineColor="green"
        innerCircle="icon"
        iconStyle={{width: 14, height: 16}}
        titleStyle={{color: '#000', position: 'relative', bottom: 13}}
        descriptionStyle={{color: '#000', position: 'relative', bottom: 24}}
      />
    </ScreenView>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
