import React, {useLayoutEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabView from '../../components/Container/TabView';
import BackHeader from '../../components/Header/BackHeader';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import ConfirmModal from '../../components/Modal/ConfirmModal';
import {showModal} from '../../redux/features/commonSlice';
import {successToast} from '../../utils/toast';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.users);
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Profile" />,
    });
  }, [navigation]);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('role');
    // AsyncStorage.clear()
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{name: 'Login'}],
    //   }),
    // );
    dispatch(showModal(false));
    navigation.replace('Login');
    successToast('Logout Successfully!!!');
  };
  return (
    <TabView>
      <View style={styles.container}>
        <Card style={styles.container1}>
          <View style={styles.profileImageContainer}>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.editProfileButton}>
              <FontAwesome5 name="edit" size={20} color="#007bff" />
            </TouchableOpacity>
            <Image
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1644061982239387648/4pxcTG5J_400x400.jpg',
              }}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.profileName}>{user?.username}</Text>
          <Text style={styles.profileEmail}>{user?.email}</Text>
        </Card>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.button}>
            <FontAwesome5
              name="user-edit"
              size={20}
              color="#3081D0"
              style={styles.icon1}
            />
            <Text style={styles.buttonText}>Edit Profile</Text>
            <FontAwesome5
              name="chevron-right"
              size={20}
              color="#3081D0"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, styles.buttonMargin]}>
            <FontAwesome5
              name="briefcase"
              size={20}
              color="#3081D0"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>My Jobs</Text>
            <FontAwesome5
              name="chevron-right"
              size={20}
              color="#3081D0"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SwitchRecruiter')}
            style={[styles.button, styles.buttonMargin]}>
            <FontAwesome5
              name="user-tie"
              size={20}
              color="#3081D0"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Switch to recruiter</Text>
            <FontAwesome5
              name="chevron-right"
              size={20}
              color="#3081D0"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, styles.buttonMargin]}>
            <FontAwesome5
              name="question-circle"
              size={20}
              color="#3081D0"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Help</Text>
            <FontAwesome5
              name="chevron-right"
              size={20}
              color="#3081D0"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, styles.buttonMargin]}>
            <FontAwesome5
              name="file-alt"
              size={20}
              color="#3081D0"
              style={styles.icon2}
            />
            <Text style={styles.buttonText}>My Resume</Text>
            <FontAwesome5
              name="chevron-right"
              size={20}
              color="#3081D0"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={[styles.button, styles.buttonMargin]}>
            <FontAwesome5
              name="cogs"
              size={20}
              color="#3081D0"
              style={styles.icon3}
            />
            <Text style={styles.buttonText}>Account Settings</Text>
            <FontAwesome5
              name="chevron-right"
              size={20}
              color="#3081D0"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            style={[styles.button, styles.buttonMargin]}>
            <FontAwesome5
              name="bell"
              size={20}
              color="#3081D0"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Notification Settings</Text>
            <FontAwesome5
              name="chevron-right"
              size={20}
              color="#3081D0"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={[styles.button, styles.buttonMargin]}>
            <FontAwesome5
              name="info"
              size={20}
              color="#3081D0"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>About Us</Text>
            <FontAwesome5
              name="chevron-right"
              size={20}
              color="#3081D0"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => dispatch(showModal(true))}
        style={[styles.logout, styles.buttonMargin]}>
        <MaterialIcons
          name="logout"
          size={20}
          color="#E72929"
          style={styles.icon2}
        />
        <Text style={styles.logoutText}>Logout</Text>
        <FontAwesome5
          name="chevron-right"
          size={20}
          color="#E72929"
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <ConfirmModal
        onSubmit={logout}
        onCancel={() => dispatch(showModal(false))}
      />
    </TabView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  profileImageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editProfileButton: {
    position: 'absolute',
    top: 70,
    right: -10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
    // left:0
  },
  profileName: {
    fontSize: 20,
    marginBottom: 6,
    marginTop: 16,
    textAlign: 'center',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE3CA',
    borderRadius: 18,
    paddingTop: 8,
    paddingBottom: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3081D0',
    marginLeft: 20,
    marginRight: 20,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E72929',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    marginLeft: 10,
    flex: 1,
    padding: 2,
    fontSize: 15,
  },
  logoutText: {
    marginLeft: 10,
    flex: 1,
    padding: 2,
    fontSize: 15,
    color: '#E72929',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  icon: {
    marginRight: 10,
  },
  icon1: {
    marginRight: 5,
  },
  icon2: {
    marginRight: 15,
  },
  icon3: {
    marginRight: 4,
  },
  buttonMargin: {
    marginTop: 10,
  },
});

export default Profile;
