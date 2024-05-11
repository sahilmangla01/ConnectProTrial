import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-paper';

function PostJob() {
  const [image, setImage] = useState(null);
  const addImage = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.paragraph}>Create Post</Text>
        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.buttonText}>Choose Visibility</Text>
              <AntDesign
                name="caretdown"
                size={13}
                color="black"
                paddingLeft={15}
              />
            </View>
          </TouchableOpacity> */}
        </View>
        <Text style={styles.jobDetailsContainer}>Job Details</Text>
        <View style={styles.inputcontainer}>
          <Text style={styles.title}>Job Title</Text>
          <TextInput
            style={styles.inputbox}
            outlineStyle={{borderRadius: 30}}
            label="Job Title"
            mode="outlined"
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.title}>Job Description</Text>
          <TextInput
            style={[styles.inputbox, {height: 127}]}
            outlineStyle={{borderRadius: 30}}
            label="Job Description"
            mode="outlined"
            multiline={true}
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.title}>Employment Type</Text>
          <TextInput
            style={styles.inputbox}
            outlineStyle={{borderRadius: 30}}
            label="Employment Type"
            mode="outlined"
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.title}>Location</Text>
          <TextInput
            style={styles.inputbox}
            outlineStyle={{borderRadius: 30}}
            label="Location"
            mode="outlined"
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.title}>Salary Range</Text>
          <TextInput
            style={styles.inputbox}
            outlineStyle={{borderRadius: 30}}
            label="Salary Range"
            mode="outlined"
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.title}>Skill Required</Text>
          <TextInput
            style={styles.inputbox}
            outlineStyle={{borderRadius: 30}}
            label="Skill Required"
            mode="outlined"
          />
        </View>
        <View style={styles.uploadBtnContainer}>
          <TouchableOpacity
            onPress={addImage}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 30,
            }}>
            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.footerbtn}>
          <TouchableOpacity style={[styles.button, styles.borderButton]}>
            <Text style={{color: '#717780', paddingHorizontal: 30}}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.backgroundButton]}>
            <Text style={{color: 'white'}}>Save & Preview</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PostJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  paragraph: {
    paddingTop: 22,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0050D1',
    padding: 5,
    width: '100%',
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    padding: 10,
  },
  btn: {
    flexDirection: 'row',
    borderColor: '#D2D2D2',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: 'black',
    marginRight: 5,
  },
  jobDetailsContainer: {
    marginLeft: 1,
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 2,
    borderRadius: 30,
  },
  inputcontainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 2,
  },
  inputbox: {
    width: '95%',
    height: 40,
    marginTop: 2,
    borderRadius: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  footerbtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 80,
  },
  backgroundButton: {backgroundColor: '#0050D1'},
  borderButton: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginRight: 10,
  },
});
