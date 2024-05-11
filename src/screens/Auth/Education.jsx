import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Divider,
  Button,
  Searchbar,
  TextInput,
  RadioButton,
  Card,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FieldArray, Formik} from 'formik';
import * as Yup from 'yup';
import KeyboardView from '../../components/Container/TabView';
import BackHeader from '../../components/Header/BackHeader';
import ScreenView from '../../components/Container/ScreenView';
import {DateFormat} from '../../utils/dateTime';
import FormView from '../../components/Container/FormView';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  date: Yup.string().required('Date is required'),
});

const Education = ({navigation, registerForm}) => {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Back" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);

  const startDatePicker = () => {
    setIsStart(true);
  };

  const endDatePicker = () => {
    setIsEnd(true);
  };

  const hideDatePicker = () => {
    setIsStart(false);
    setIsEnd(false);
  };

  return (
    <FormView style={styles.container}>
      <Formik
        initialValues={{
          education: [
            {
              qualifation: '',
              startData: new Date(),
              endDate: new Date(),
              eduType: '',
              clg: '',
              percentage: 0,
            },
          ],
        }}
        // validationSchema={validationSchema}
        onSubmit={async (values, {resetForm}) => {
          let allData = {
            registerForm,
            ...values,
          };
          console.log(allData);
          // await resetForm({values: ''});
          navigation.navigate('Experience');
        }}>
        {({
          values,
          handleChange,
          handleBlur,
          setFieldValue,
          isValid,
          handleSubmit,
          errors,
          touched,
        }) => (
          <FieldArray name="education">
            {({push, remove}) => (
              <>
                <Button
                  mode="contained"
                  style={styles.viewButton1}
                  onPress={() =>
                    push({
                      qualifation: '',
                      startData: new Date(),
                      endDate: new Date(),
                      eduType: '',
                      clg: '',
                      percentage: 0,
                    })
                  }>
                  <Text style={styles.buttonText}>Add</Text>
                </Button>
                {values.education.map((item, i) => (
                  <Card
                    key={i}
                    style={{
                      margin: 12,
                      padding: 12,
                      backgroundColor: '#FFE3CA',
                    }}>
                    <TouchableOpacity
                      style={{marginLeft: 'auto'}}
                      onPress={() => remove(i)}>
                      <Icon name="close-circle" color={'#E72929'} size={30} />
                    </TouchableOpacity>

                    <TextInput
                      label={<Text style={styles.label}>Education</Text>}
                      mode="outlined"
                      value={item.education}
                      onChangeText={handleChange(`education[${i}].qualifation`)}
                      onBlur={handleBlur(`education[${i}].qualifation`)}
                      style={styles.bodyInput}
                      outlineStyle={{borderRadius: 30}}
                    />
                    <Text variant="titleMedium" style={styles.titleMedium}>
                      Duration:
                    </Text>
                    <View style={styles.date}>
                      <Button
                        title="Show Date Picker"
                        onPress={startDatePicker}>
                        <FontAwesome5
                          name="calendar-alt"
                          size={20}
                          color="#000"
                        />
                        <Text style={styles.calanderText}>
                          {' '}
                          {DateFormat(item.startData) === DateFormat(new Date())
                            ? ' Start Date'
                            : DateFormat(item.startData)}
                        </Text>
                      </Button>
                      <DateTimePickerModal
                        isVisible={isStart}
                        mode="date"
                        date={item.startData}
                        onConfirm={newDate => {
                          hideDatePicker();
                          setFieldValue(`education[${i}].startData`, newDate);
                        }}
                        onCancel={hideDatePicker}
                      />

                      <Button
                        title="Show Date Picker"
                        onPress={endDatePicker}
                        mode="text">
                        <FontAwesome5
                          name="calendar-alt"
                          size={20}
                          color="#000"
                        />
                        <Text style={styles.calanderText}>
                          {' '}
                          {DateFormat(item.endDate) === DateFormat(new Date())
                            ? ' End Date'
                            : DateFormat(item.endDate)}
                        </Text>
                      </Button>
                      <DateTimePickerModal
                        isVisible={isEnd}
                        mode="date"
                        date={item.endDate}
                        minimumDate={new Date(item.startData)}
                        onConfirm={newDate => {
                          hideDatePicker();
                          setFieldValue(`education[${i}].endDate`, newDate);
                        }}
                        onCancel={hideDatePicker}
                      />
                    </View>

                    <Text variant="titleMedium" style={styles.titleMedium}>
                      Education Type
                    </Text>
                    <RadioButton.Group
                      value={item.eduType}
                      onValueChange={handleChange(`education[${i}].eduType`)}>
                      <View style={styles.radioButtonContainer}>
                        <View style={styles.radioButtonOption}>
                          <RadioButton
                            value="Full Time"
                            color="#5E1675"
                            uncheckedColor="#5E1675"
                          />
                          <Text>Full Time</Text>
                        </View>
                        <View style={styles.radioButtonOption}>
                          <RadioButton
                            value="Part Time"
                            color="#5E1675"
                            uncheckedColor="#5E1675"
                          />
                          <Text>Part Time</Text>
                        </View>
                        <View style={styles.radioButtonOption}>
                          <RadioButton
                            value="Correspondence"
                            color="#5E1675"
                            uncheckedColor="#5E1675"
                          />
                          <Text>Correspondence</Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                    <TextInput
                      label={
                        <Text style={styles.label}>
                          College/University
                          <Text style={styles.TextInput1}> *</Text>
                        </Text>
                      }
                      value={item.clg}
                      onChangeText={handleChange(`education[${i}].clg`)}
                      onBlur={handleBlur(`education[${i}].clg`)}
                      mode="outlined"
                      style={styles.bodyInput}
                      outlineStyle={{borderRadius: 30}}
                    />
                    <TextInput
                      label={
                        <Text style={styles.label}>
                          Percentage/CGPA
                          <Text style={styles.TextInput1}> *</Text>
                        </Text>
                      }
                      value={item.percentage}
                      onChangeText={handleChange(`education[${i}].percentage`)}
                      onBlur={handleBlur(`education[${i}].percentage`)}
                      mode="outlined"
                      style={styles.bodyInput}
                      outlineStyle={{borderRadius: 30}}
                    />
                  </Card>
                ))}
                <Button
                  mode="contained"
                  style={styles.viewButton1}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Save and Countinue</Text>
                </Button>
              </>
            )}
          </FieldArray>
        )}
      </Formik>
    </FormView>
  );
};

export default Education;
const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  bodyInput: {
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    height: 40,
  },
  body: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  TextInput: {
    // borderRadius :1,
    borderRadius: 50,
    marginLeft: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
  },
  TextInput2: {
    borderRadius: 50,
    marginLeft: 70,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
  },
  TextInput1: {
    color: 'red',
  },
  date: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
  },
  calanderText: {
    color: 'gray',
  },
  divider: {
    flexDirection: 'row',
  },
  div: {
    paddingLeft: 2,
    width: 150,
  },
  div1: {
    paddingLeft: 12,
  },
  EducationText: {
    width: 140,
    borderRadius: 50,
    marginLeft: 15,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
  },
  radioButtonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  radioButtonOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleMedium: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  radioButtonContainer1: {
    marginTop: 15,
    flexDirection: 'row',
    marginLeft: 10,
  },
  radioButtonOption1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
  },
  single: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  bodyLarge: {
    color: 'gray',
    fontSize: 20,
  },
  divi: {
    // paddingTop:10
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 40,
  },
  label: {
    color: 'gray',
  },
  viewButton1: {
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 20,
    backgroundColor: '#002A6F',
    marginTop: 8,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 18,
    paddingTop: 6,
    paddingBottom: 5,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
});
