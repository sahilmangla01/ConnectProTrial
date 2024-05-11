import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-paper';
import KeyboardView from '../../components/Container/TabView';
import BackHeader from '../../components/Header/BackHeader';

function Hiring({navigation, route}) {
  const {job} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => (
        <BackHeader navigation={navigation} title="Back" textAlign="center" />
      ),
    });
  }, [navigation]);
  return (
    <KeyboardView>
      <View style={styles.viewContent}>
        <View style={styles.imageContainer}>
          <Image source={{uri: job.image}} style={styles.image} />
        </View>

        <Text style={[styles.inputText, {marginTop: -10}]}>Hiring</Text>

        <Text style={styles.textDraw}>Interns | {job.job_title}</Text>
      </View>

      <Text style={styles.inputDes}>Description</Text>

      <View>
        <Text variant="headlineSmall" style={styles.headLine}>
          {job.description}
        </Text>
      </View>
      <Text style={styles.inputDes}>Skill Required</Text>
      <View style={styles.int}>
        {job.skills.map((skill, i) => (
          <Text variant="headlineSmall" style={styles.inputReq} key={i}>
            . {skill}
          </Text>
        ))}
      </View>
      <Text style={styles.inputDes}>Salary</Text>
      <Text variant="headlineSmall" style={styles.headLine}>
        Salary ranges from ₹4,00,000 to ₹10,00,000 annually, depending on
        experience and skills.
      </Text>
      <Text style={styles.inputDes}>Education</Text>
      <Text variant="headlineSmall" style={styles.headLine}>
        Education: Bachelor's degree in Graphic Design, Interaction Design, or
        related field.
      </Text>
      <Text style={styles.inputDes}>Responsibilities</Text>
      <Text variant="headlineSmall" style={styles.headLine}>
        Create wireframes, mockups, and prototypes. Conduct user research and
        usability testing. Ensure design consistency and provide guidance to
        developers. Stay updated on design trends.
      </Text>
      <Text style={styles.inputDes}>How to apply</Text>
      <Text variant="headlineSmall" style={styles.headLine}>
        Submit your resume and portfolio showcasing UI/UX design skills and
        experience.
      </Text>
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={{color: '#fff'}}
        // onPress={formik.handleSubmit}
      >
        APPLY
      </Button>
      <Button
        mode="outlined"
        style={styles.outlineBtn}
        labelStyle={{color: '#000'}}
        // onPress={formik.handleSubmit}
      >
        SAVE FOR LATER
      </Button>
    </KeyboardView>
  );
}

export default Hiring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewContent: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#002B70',
    borderRadius: 20,
    marginTop: 16,
  },
  labelSmall: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    paddingTop: 20,
  },
  imageContainer: {
    marginTop: 12,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
  },
  inputText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 50,
  },
  textDraw: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    paddingBottom: 12,
  },
  inputDes: {
    paddingTop: 12,
    padding: 6,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  headLine: {
    fontSize: 15,
    color: '#000',
    paddingBottom: 12,
    fontFamily: 'Poppins-Regular',
  },
  inputReq: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000',
    paddingBottom: 12,
    padding: 6,
  },
  int: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#0050D1',
    padding: 2,
    borderRadius: 30,
    marginBottom: 12,
  },
  outlineBtn: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 30,
    marginBottom: 12,
  },
});
