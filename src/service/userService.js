import {Alert} from 'react-native';
import {REACT_URL} from '../api';
import {showLoading, showModal} from '../redux/features/commonSlice';
import {getUser, login, register} from '../redux/features/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authHeader from '../api/header';
import {errorToast, successToast} from '../utils/toast';

// Register
const RegisterService = data => dispatch => {
  dispatch(showLoading(true));
  REACT_URL.post('/register', data)
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        dispatch(register(res.data));
        dispatch(showLoading(false));
        dispatch(showModal(true));
        console.log(res);
      }
    })
    .catch(error => {
      dispatch(showLoading(false));
      errorToast(error?.response?.data?.msg);
    });
};

// Login
const LoginService = (data, navigation) => async dispatch => {
  dispatch(showLoading(true));
  try {
    const loginData = await REACT_URL.post('/login', data);
    console.log('loginData', loginData);
    if (loginData.status === 200) {
      dispatch(login(loginData.data));
      await AsyncStorage.setItem('token', loginData?.data?.token);
      await AsyncStorage.setItem('role', loginData?.data?.userdetail?.role);
      if (loginData?.data?.userdetail?.role === 'Candidate') {
        navigation.replace('tab');
        dispatch(showLoading(false));
      } else if (loginData?.data?.userdetail?.role === 'Recruiter') {
        navigation.replace('tab');
        dispatch(showLoading(false));
      } else {
        navigation.replace('Login');
        dispatch(showLoading(false));
      }
    }
  } catch (error) {
    dispatch(showLoading(false));
    console.log(error?.response?.data?.msg);
    errorToast(error?.response?.data?.msg);
  }
};

const GetUserService = () => async dispatch => {
  await REACT_URL.get('/auth', {
    headers: await authHeader(),
  })
    .then(res => {
      if (res.status === 200) {
        dispatch(login(res.data));
        console.log('get res', res);
      }
    })
    .catch(error => {
      console.log(error?.response?.data?.msg);
      Alert.alert(error?.response?.data?.msg);
    });
};

const EditUserService = editData => async dispatch => {
  dispatch(showLoading(true));
  await REACT_URL.post('/updateuserinfo', editData, {
    headers: await authHeader(),
  })
    .then(res => {
      if (res.status === 200) {
        dispatch(getUser(res.data));
        dispatch(GetUserService());
        dispatch(showLoading(false));
        console.log('update res', res);
        successToast('Update Successfully!!!');
      }
    })
    .catch(error => {
      console.log(error);
      Alert.alert(error?.response?.data?.msg);
    });
};

export {RegisterService, LoginService, GetUserService, EditUserService};
