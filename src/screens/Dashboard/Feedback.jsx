import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

const Feedback = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/Company_logo.png')}
          style={styles.imageview}
        />
        <Text style={styles.textLine}>FEEDBACK PAGE</Text>
      </View>
      <View style={styles.viewext}>
        <Text style={styles.headerText}>congratulation</Text>
        <Text style={styles.headerText}>You are Selected</Text>
        <Text style={styles.headerText1}>Welcome to Makinlay Enterprises</Text>
      </View>
      <View style={styles.section}>
        <TextInput
          label={<Text>User Name</Text>}
          mode="outlined"
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Name</Text>}
          mode="outlined"
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Register Number</Text>}
          mode="outlined"
          keyboardType="number-pad"
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Collage</Text>}
          mode="outlined"
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Course</Text>}
          mode="outlined"
          style={styles.bodyInput}
        />

        <TextInput
          label={<Text>Feedback</Text>}
          mode="outlined"
          style={[styles.bodyInput]}
          multiline={true}
        />

        <Button mode="contained" style={styles.button}>
          submit
        </Button>
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  imageContainer: {
    flexDirection: 'row-reverse',
    marginBottom: 15,
  },
  imageview: {
    width: 100,
    marginRight: 10,
  },
  textLine: {
    marginTop: 10,
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    height: 50,
    width: 230,
    paddingTop: 15,
    paddingLeft: 50,
    paddingRight: 0,
    fontSize: 15,
    backgroundColor: 'blue',
    color: 'white',
  },
  section: {
    padding: 0,
  },
  viewext: {
    marginBottom: 20,
    marginLeft: 45,
    borderWidth: 1,
    borderRadius: 40,
    width: 300,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#8a2be2',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  headerText1: {
    fontSize: 15,
    color: 'white',
  },

  bodyInput: {
    borderRadius: 50,
    marginLeft: 30,
    marginRight: 30,

    marginBottom: 15,
    height: 51,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 20,
    backgroundColor: '#2358FB',
  },
});
