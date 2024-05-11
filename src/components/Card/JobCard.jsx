import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Divider, Button, Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const JobCard = ({job, navigation}) => {
  return (
    <View style={styles.container}>
      <Card elevation={0} style={styles.line}>
        <View style={styles.inputContainer}>
          <Image source={{uri: job.image}} style={styles.imageview} />
          <View style={styles.textView}>
            <Text variant="titleLarge" style={styles.textView1}>
              {job.job_title}
            </Text>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="money-bill-alt" size={15} color="green" />
              <Text variant="bodyLarge" style={styles.textView2}>
                30K<Text style={styles.redText}>/Month</Text>
              </Text>
            </View>
            <Text style={styles.text}>12 hour ago</Text>
          </View>
          <View style={styles.Button}>
            <FontAwesome5
              name="bookmark"
              size={25}
              color="#000"
              style={styles.book}
            />
            <Button
              mode="contained"
              style={styles.Button2}
              onPress={() => navigation.navigate('Hiring', {job: job})}>
              Apply
            </Button>
            {/* <Button mode="" style={styles.Button1}>Save For Later</Button> */}
          </View>
        </View>
        <Divider />
        <View style={styles.locationContainer}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#000" />
          <Text style={styles.locationText}>Pune</Text>
          <FontAwesome5 name="user" size={20} color="#000" />
          <Text style={styles.locationText}>Fresher</Text>
          <FontAwesome5 name="tint" size={20} color="#000" />
          <Text style={styles.locationText}>Full Time</Text>
        </View>
      </Card>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: '#8E8A8A',
    marginLeft: 2,
    marginRight: 2,
    paddingTop: 16,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 35,
    height: 180,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  imageview: {
    width: 70,
    height: 70,
    borderRadius: 0,
  },
  textView: {
    paddingLeft: 10,
  },
  textView1: {
    paddingBottom: 5,
    paddingTop: 7,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  iconContainer: {
    flexDirection: 'row',
    paddingTop: 7,
  },
  textView2: {
    paddingLeft: 7,
    marginTop: -4,
  },

  redText: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  book: {
    paddingLeft: 50,
    paddingBottom: 25,
  },
  text: {
    color: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'center',
    marginLeft: 20,
  },
  locationText: {
    paddingRight: 25,
    marginLeft: 8,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  Button: {
    paddingTop: 11,
    paddingLeft: 8,
    fontFamily: 'Poppins-Medium',
    marginLeft: 'auto',
  },
  Button2: {
    borderRadius: 10,
    backgroundColor: '#00296B',
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
});
