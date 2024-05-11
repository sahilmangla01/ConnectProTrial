import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TabView from '../../components/Container/TabView';
import {useLayoutEffect} from 'react';
import BackHeader from '../../components/Header/BackHeader';

function Settings({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => (
        <BackHeader navigation={navigation} title="Account Settings" />
      ),
    });
  }, [navigation]);
  return (
    <TabView>
      <View style={styles.options}>
        <View style={styles.optionItem}>
          <AntDesign name="delete" size={24} color="black" />
          <Text style={styles.text}>Delete My Account</Text>
        </View>
        <View style={styles.optionItem}>
          <MaterialIcons name="phone-iphone" size={24} color="black" />
          <Text style={styles.text}>Change My Phone Number</Text>
        </View>
        <View style={styles.optionItem}>
          <FontAwesome5 name="key" size={24} color="black" />
          <Text style={styles.text}>Change Password</Text>
        </View>
        <View style={styles.optionItem}>
          <FontAwesome5 name="question-circle" size={24} color="black" />
          <Text style={styles.text}>Customer Support</Text>
        </View>
        <View style={styles.optionItem}>
          <MaterialIcons name="dark-mode" size={24} color="black" />
          <Text style={styles.text}>Customer Theme</Text>
        </View>
      </View>
    </TabView>
  );
}

export default Settings;

const styles = StyleSheet.create({
  text: {
    marginTop: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#00000033',
    marginLeft: 16,
    width: '100%',
    color: '#000',
    paddingBottom: 2,
    fontFamily: 'Poppins-Medium',
  },
  options: {
    width: 350,
    padding: 8,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 12,
  },
});
