import {StatusBar} from 'expo-status-bar';
import {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackHeader from '../../components/Header/BackHeader';
import {Button} from 'react-native-paper';

function Assessment({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Assessments" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flex: 1,
          }}>
          <Entypo
            name="controller-record"
            size={20}
            color="#000"
            style={{width: 31, height: 20, top: 12, left: -25}}
          />

          <Text variant="titleMedium" style={styles.viewText1}>
            Coding <Text style={styles.viewText2}>Round</Text>{' '}
          </Text>
          <Entypo
            name="chevron-right"
            size={40}
            color="#000"
            style={{marginLeft: 22}}
          />
        </View>
      </View>
      <Text style={styles.viewText3}>20 min </Text>
      <View style={styles.viewText}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
          }}>
          <Entypo
            name="controller-record"
            size={20}
            color="#000"
            style={{width: 31, height: 20, top: 12, left: -25}}
          />

          <Text variant="titleMedium" style={styles.viewText1}>
            Aptitude <Text style={styles.viewText2}>Round</Text>{' '}
          </Text>
          <Entypo
            name="chevron-right"
            size={40}
            color="#000"
            style={{marginLeft: 22}}
          />
        </View>
      </View>
      <Text style={styles.viewText3}>20 min </Text>
      <View style={styles.viewText}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
          }}>
          <Entypo
            name="controller-record"
            size={20}
            color="#000"
            style={{width: 31, height: 20, top: 12, left: -25}}
          />

          <Text variant="titleMedium" style={styles.viewText1}>
            MCQ <Text style={styles.viewText2}>Round</Text>{' '}
          </Text>
          <Entypo
            name="chevron-right"
            size={40}
            color="#000"
            style={{marginLeft: 22}}
          />
        </View>
      </View>
      <Text style={styles.viewText3}>20 min </Text>
      <View style={styles.viewText}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
          }}>
          <Entypo
            name="controller-record"
            size={20}
            color="#000"
            style={{width: 31, height: 20, top: 12, left: -25}}
          />

          <Text variant="titleMedium" style={styles.viewText1}>
            Communication <Text style={styles.viewText2}></Text>{' '}
          </Text>
          <Entypo
            name="chevron-right"
            size={40}
            color="#000"
            style={{marginLeft: 22}}
          />
        </View>
      </View>
      <Text style={styles.viewText3}>20 min </Text>
      <Button onPress={()=> navigation.navigate('Quiz')}>Quiz</Button>
    </View>
  );
}

export default Assessment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  displayMedium: {
    fontSize: 30,
    marginTop: 12,
    color: 'white',
  },
  viewText: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: -30,
    backgroundColor: '#FFE3CA',
    paddingLeft: 40,
    paddingRight: -20,
    paddingBottom: 10,
    paddingTop: 20,
    borderRadius: 10,
    width: 330,
    // padding:30
  },

  viewText1: {
    fontSize: 15,

    paddingTop: 10,
    paddingBottom: 20,
    // marginLeft:10,
    color: '#FA7902',
    fontFamily: 'Poppins-Medium',
  },
  viewText2: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  viewText3: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
    marginBottom: -10,
    paddingBottom: 10,

    fontFamily: 'Poppins-Regular',
  },
  discription: {
    borderRadius: 10,
    // paddingStart:-10,
    //paddingLeft:-20,
    //paddingRight:15,
    // paddingRight:30,
  },
});
