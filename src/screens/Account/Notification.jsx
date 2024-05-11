import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TabView from '../../components/Container/TabView';
import {useLayoutEffect} from 'react';
import BackHeader from '../../components/Header/BackHeader';

function Notification({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => (
        <BackHeader navigation={navigation} title="Notifications" />
      ),
    });
  }, [navigation]);

  return (
    <TabView>
      <View style={styles.box1}>
        <Image
          source={require('../../assets/images/annoncement.png')}
          style={styles.image}
        />
        <Text style={{paddingLeft: 0, paddingRight: 100, color: '#000'}}>
          Your application was viewed for PHP developer 10 years experience by
          BORN GROUP
        </Text>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginLeft: -190,
            backgroundColor: '#E5F6EC',
            borderRadius: 20,
            fontSize: 12,
            padding: 7,
            color: '#000',
          }}>
          2 Minutes Ago
        </Text>
      </View>

      <View style={styles.box1}>
        <Image
          source={require('../../assets/images/case.png')}
          style={styles.image}
        />
        <Text
          style={{
            paddingLeft: 1,
            paddingRight: 135,
            fontSize: 13,
            lineHeight: 17,
            width: 350,
            color: '#000',
          }}>
          Welcome Onboard!{'\n'}
          Good Luck With Your Job Search"
        </Text>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginLeft: -190,
            backgroundColor: '#E5F6EC',
            borderRadius: 20,
            fontSize: 12,
            padding: 7,
            color: '#000',
          }}>
          2 Weeks Ago
        </Text>
      </View>
    </TabView>
  );
}
export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0050D1',
  },
  title: {
    marginTop: 60,
    flexDirection: 'row',
  },
  box1: {
    margin: 6,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 110,
    padding: 10, // Adjust padding to fit within screen
    marginTop: 2,
    borderRadius: 10,
  },
  image: {
    width: 43,
    height: 36,
    //marginLeft:20
  },
});
