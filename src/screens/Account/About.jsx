import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import TabView from '../../components/Container/TabView';
import BackHeader from '../../components/Header/BackHeader';

const About = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="About Us" />,
    });
  }, [navigation]);
  return (
    <TabView>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>1.</Text>
        </View>
        <Text style={styles.textContent1}>
          Mission Statement: Define the purpose of the job portal app, such as
          connecting job seekers with opportunities that align with their skills
          and aspirations, and assisting employers in finding qualified
          candidates efficiently
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>2.</Text>
        </View>
        <Text style={styles.textContent1}>
          Company Background: Provide a brief overview of the company behind the
          job portal app, including its history, values, and any significant
          achievements or milestones.
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>3.</Text>
        </View>
        <Text style={styles.textContent1}>
          User-Centric Approach: Highlight the app's commitment to prioritizing
          the needs of both job seekers and employers, offering user-friendly
          features, personalized recommendations, and comprehensive support
          throughout the hiring process.
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>4.</Text>
        </View>
        <Text style={styles.textContent1}>
          Diverse Talent Pool: Emphasize the app's dedication to fostering
          diversity and inclusion by actively promoting equal opportunities for
          all candidates, regardless of background, ethnicity, gender, or other
          factors.
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>5.</Text>
        </View>
        <Text style={styles.textContent1}>
          Advanced Technology: Showcase the innovative technologies and
          algorithms utilized within the app to streamline recruitment
          processes, enhance candidate matches, and deliver a seamless user
          experience.
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>6.</Text>
        </View>
        <Text style={styles.textContent1}>
          Industry Partnerships: Mention any strategic partnerships or
          collaborations with leading organizations, universities, or industry
          experts that contribute to the app's credibility and access to a wide
          range of job opportunities.
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>7.</Text>
        </View>
        <Text style={styles.textContent1}>
          Data Privacy and Security: Assure the app's stringent data protection
          measures and adherence to privacy regulations, safeguarding their
          personal information and ensuring confidentiality throughout their job
          search journey.
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>8.</Text>
        </View>
        <Text style={styles.textContent1}>
          Customer Support: Highlight the availability of dedicated customer
          support channels, live chat, email, or phone assistance, to address
          any inquiries, concerns, or technical issues promptly and effectively.
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>9.</Text>
        </View>
        <Text style={styles.textContent1}>
          Continuous Improvement: Express app's commitment to ongoing refinement
          and enhancement based on user feedback, market trends, and emerging
          technologies, ensuring the job search forefront of recruitment
          landscape.
        </Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.numberContainer}>
          <Text style={styles.textContent}>10.</Text>
        </View>
        <Text style={styles.textContent1}>
          Customer Support: Highlight the availability of dedicated customer
          support channels, live chat, email, or phone assistance, to address
          any inquiries, concerns, or technical issues promptly and effectively.
        </Text>
      </View>
    </TabView>
  );
};

export default About;

const styles = StyleSheet.create({
  viewContent: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingBottom: 10,
    marginTop: 12,
  },
  numberContainer: {
    width: 30, // Adjust width according to the widest number
    fontFamily: 'Poppins-Regular',
  },
  textContent: {
    fontSize: 15,
    color: '#6E6E6E',
    fontFamily: 'Poppins-Regular',
  },
  textContent1: {
    flex: 1,
    fontSize: 15,
    color: '#6E6E6E',
    paddingRight: 20,
    fontFamily: 'Poppins-Regular',
  },
});
