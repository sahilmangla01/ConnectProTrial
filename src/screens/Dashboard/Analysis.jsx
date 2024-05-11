import {Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useLayoutEffect} from 'react';
import BackHeader from '../../components/Header/BackHeader';
import TabView from '../../components/Container/TabView';

function Analysis({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Analytics" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);

  return (
    <TabView>
      <View style={styles.timeperiod}>
        <Text
          style={{
            marginLeft: 20,
            color: '#696974',
            fontFamily: 'Poppins-Medium',
          }}>
          Weekly
        </Text>
        <Text
          style={{
            backgroundColor: '#0062FF',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            borderRadius: 10,
            color: 'white',
            marginTop: -8,
            fontFamily: 'Poppins-Medium',
          }}>
          Monthly
        </Text>
        <Text
          style={{
            marginRight: 20,
            color: '#696974',
            fontFamily: 'Poppins-Medium',
          }}>
          Yearly
        </Text>
      </View>
      <View style={styles.mailcontainer}>
        <View
          style={{backgroundColor: '#D3C0FB', padding: 10, borderRadius: 10}}>
          <Text style={{color: '#696974', fontSize: 14}}>
            <Entypo name="mail" size={20} color="#FA7902" />
            Contacted by mail
          </Text>
          <Text style={{fontSize: 16, color: '#000'}}>13 mail</Text>
        </View>
        <View
          style={{backgroundColor: '#F9BBBB', padding: 10, borderRadius: 10}}>
          <Text style={{color: '#000'}}>
            <MaterialIcons name="call" size={24} color="#00B707" />
            Contacted by mail
          </Text>
          <Text style={{fontSize: 16, color: '#000'}}>5 calls</Text>
        </View>
      </View>
      <View
        style={{
          borderColor: '#0000001A',
          borderRadius: 5,
          borderStyle: 'solid',
          borderWidth: 1,
          padding: 20,
          marginTop: 5,
        }}>
        <Text style={{fontSize: 16, fontWeight: 500, color: "#000"}}>
          Jop Application Analytics
        </Text>
        <Text style={{fontSize: 12, color: '#0050D1', paddingTop: 9}}>
          Success Rate
        </Text>
      </View>
      <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Text style={{fontSize: 12, padding: 6, color: '#0050D1'}}>
          Applications
        </Text>
      </View>
      <Image source={require('../../assets/images/graph.png')} />
      <View
        style={{
          borderColor: '#0000001A',
          borderRadius: 5,
          borderStyle: 'solid',
          borderWidth: 1,
          padding: 20,
          marginTop: 5,
        }}>
        <Text style={{fontSize: 16, fontWeight: 500}}>Activities</Text>
        <Text style={{fontSize: 12, color: '#0050D1', paddingTop: 9}}>
          Success Rate
        </Text>
      </View>
      <Image source={require('../../assets/images/graph.png')} />
    </TabView>
  );
}

export default Analysis;

const styles = StyleSheet.create({
  timeperiod: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  mailcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    // padding:20
  },
});
