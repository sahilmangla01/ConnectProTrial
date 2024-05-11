import AsyncStorage from '@react-native-async-storage/async-storage';

async function authHeader() {
  const token = await AsyncStorage.getItem('token');
  return {Authorization: 'Bearer ' + token};
}

export default authHeader;
