import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/stack/AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from './src/navigation/tab/TabNavigation';
import {LogBox} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
LogBox.ignoreLogs(['new NativeEventEmitter']);

function App() {
  console.log(process.env.API_URL);
  // const [user, setUser] = useState('');

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('my-email');
  //     return jsonValue;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // getData().then(data => {
  //   console.log('user', data);
  //   setUser(data);
  // });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>

        <NavigationContainer>
          <AuthNavigator />
          <Toast />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
