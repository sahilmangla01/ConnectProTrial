import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Button, Card, Text, Chip} from 'react-native-paper';
import React, {useEffect, useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TabView from '../../components/Container/TabView';
import Jobs from '../../data/job.json';
import JobCard from '../../components/Card/JobCard';
import HorizontalList from '../../components/List/HorizontalList';
import MatchCard from '../../components/Card/MatchCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authHeader from '../../api/header';
import {GetUserService} from '../../service/userService';
import {useDispatch, useSelector} from 'react-redux';
import {showLoading} from '../../redux/features/commonSlice';
import ProgressModal from '../../components/Modal/ProgressModal';

const Dashboard = ({navigation}) => {
  const user = useSelector(state => state.users);
  const dispatch = useDispatch();
  console.log('user token', user);

  useEffect(() => {
    dispatch(GetUserService());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: () => (
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            fontFamily: 'Poppins-Medium',
          }}>
          Dashboard
        </Text>
      ),
      headerStyle: {
        backgroundColor: '#0050D1',
        height: 60,
      },

      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={async () => {
              // AsyncStorage.removeItem('my-email');
              navigation.navigate('Filter');
            }}>
            <Icon
              name="filter-outline"
              color={'#fff'}
              size={26}
              style={{marginRight: 18}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="search-outline" color={'#fff'} size={26} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <TabView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Best Matches for you</Text>
        <Text style={styles.body}>See All</Text>
      </View>
      <HorizontalList>
        {Jobs.map((item, index) => (
          <MatchCard job={item} key={index} navigation={navigation} />
        ))}
      </HorizontalList>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Recommended Jobs</Text>
        <Text style={styles.body}>See All</Text>
      </View>
      {Jobs.map((item, index) => (
        <JobCard key={index} job={item} navigation={navigation} />
      ))}
      {/* <Button mode="contained" onPress={() => dispatch(showLoading(true))}>
        on Load
      </Button>
      <ProgressModal onSubmit={() => dispatch(showLoading(false))} /> */}
    </TabView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    // marginBottom: 50,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12,
  },
  title: {fontSize: 16, color: '#000', fontFamily: 'Poppins-Medium'},
  body: {
    fontSize: 14,
    color: '#2A69E5',
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
  },
});
