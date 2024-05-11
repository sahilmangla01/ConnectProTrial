import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {TextInput, Text, Divider} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SearchBar from '../../components/Input/SearchBar';
import BackHeader from '../../components/Header/BackHeader';
import TabView from '../../components/Container/TabView';

function Search({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Back" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);
  return (
    <TabView style={styles.container}>
      <SearchBar />
      <View style={styles.inputContainer}>
        <Text variant="bodyLarge" style={styles.bodyLarge}>
          Job Categories
        </Text>
        <Text variant="bodyLarge" style={styles.bodyLarge1}>
          See All
        </Text>
      </View>
      <View style={styles.joblist}>
        <View style={styles.jobItem}>
          <FontAwesome5
            name="pen-nib"
            size={24}
            color="#007bff"
            style={styles.briefcase}
          />
          <Text
            style={{
              width: 80,
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            UI/UX Designer
          </Text>
        </View>
        <View style={styles.jobItem}>
          <FontAwesome5
            name="laptop-code"
            size={24}
            color="#28a745"
            style={styles.briefcase}
          />
          <Text
            style={{
              width: 80,
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            Software Developer
          </Text>
        </View>
        <View style={styles.jobItem}>
          <FontAwesome5
            name="briefcase"
            size={24}
            color="#dc3545"
            style={styles.briefcase}
          />
          <Text
            style={{
              width: 80,
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            Product Manager
          </Text>
        </View>
      </View>

      <View style={styles.joblist}>
        <View style={styles.jobItem}>
          <FontAwesome5
            name="pen-nib"
            size={24}
            color="#007bff"
            style={styles.briefcase}
          />
          <Text
            style={{
              width: 80,
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            UI/UX Designer
          </Text>
        </View>
        <View style={styles.jobItem}>
          <FontAwesome5
            name="laptop-code"
            size={24}
            color="#28a745"
            style={styles.briefcase}
          />
          <Text
            style={{
              width: 80,
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            Software Developer
          </Text>
        </View>
        <View style={styles.jobItem}>
          <FontAwesome5
            name="briefcase"
            size={24}
            color="#dc3545"
            style={styles.briefcase}
          />
          <Text
            style={{
              width: 80,
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            Product Manager
          </Text>
        </View>
      </View>

      <View style={[styles.inputContainer, {marginTop: 20}]}>
        <Text variant="bodyLarge" style={styles.bodyLarge}>
          Recent Searches
        </Text>
        <Text variant="bodyLarge" style={styles.bodyLarge1}>
          See All
        </Text>
      </View>
      <View style={styles.recent}>
        <FontAwesome5
          name="history"
          size={20}
          color="#827F7F"
          style={styles.icon}
        />
        <Text style={styles.ios}>IOS Developer</Text>
        <FontAwesome5
          name="times"
          size={20}
          color="#827F7F"
          style={styles.icon}
        />
      </View>
      <Divider />

      <View style={styles.recent}>
        <FontAwesome5
          name="history"
          size={20}
          color="#827F7F"
          style={styles.icon}
        />
        <Text style={styles.ios}>UI/UX Developer</Text>
        <FontAwesome5
          name="times"
          size={20}
          color="#827F7F"
          style={styles.icon}
        />
      </View>
      <Divider />

      <View style={styles.recent}>
        <FontAwesome5
          name="history"
          size={20}
          color="#827F7F"
          style={styles.icon}
        />
        <Text style={styles.ios}>IOS Developer</Text>
        <FontAwesome5
          name="times"
          size={20}
          color="#827F7F"
          style={styles.icon}
        />
      </View>
      <Divider />
      <View style={[styles.inputContainer, {marginTop: 20}]}>
        <Text variant="bodyLarge" style={styles.bodyLarge}>
          Popular Searches
        </Text>
        <Text variant="bodyLarge" style={styles.bodyLarge1}>
          See All
        </Text>
      </View>
      <View style={styles.int}>
        <Text
          variant="headlineSmall"
          style={[styles.inputReq, {backgroundColor: '#f9bbbb'}]}>
          {' '}
          IOS Developer
        </Text>
        <Text
          variant="headlineSmall"
          style={[styles.inputReq, {backgroundColor: '#e1B0FF'}]}>
          {' '}
          UI/UX designer
        </Text>
        <Text
          variant="headlineSmall"
          style={[styles.inputReq, {backgroundColor: '#CBF0FB'}]}>
          Tester
        </Text>
        <Text style={[styles.inputReq, {backgroundColor: '#FFD9C3'}]}>
          {' '}
          Product Manager
        </Text>
        <Text
          variant="headlineSmall"
          style={[styles.inputReq, {backgroundColor: '#CBF0FB'}]}>
          {' '}
          Software Engineer
        </Text>
        <Text
          variant="headlineSmall"
          style={[styles.inputReq, {backgroundColor: '#F9BBBB'}]}>
          Robotics
        </Text>
        <Text
          variant="headlineSmall"
          style={[styles.inputReq, {backgroundColor: '#e1B0FF'}]}>
          {' '}
          Back-End Developer
        </Text>
        <Text
          variant="headlineSmall"
          style={[styles.inputReq, {backgroundColor: '#FFD9C3'}]}>
          Front-End Developer
        </Text>
      </View>
    </TabView>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    // width: 400,
    // marginLeft: 10,
  },
  aContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: -5,
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 15,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  location: {
    flex: 1,
    fontSize: 15,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'whitesmoke',
  },
  bodyLarge: {
    fontFamily: 'Poppins-Bold',
  },
  bodyLarge1: {
    color: 'blue',
    fontFamily: 'Poppins-Regular',
  },
  joblist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 25,
  },
  jobItem: {
    alignItems: 'center',
  },
  briefcase: {
    borderWidth: 1,
    padding: 13,
    borderRadius: 6,
    backgroundColor: 'whitesmoke',
    borderColor: 'whitesmoke',
    marginBottom: 10,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  ios: {
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginRight: 10,
    marginTop: -20,
  },
  inputReq: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    padding: 6,
    borderRadius: 10,
    marginBottom: 10,
  },
  int: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});
