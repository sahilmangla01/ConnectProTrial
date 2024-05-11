import {Alert, Keyboard, StyleSheet, View, Image} from 'react-native';
import {Text, TextInput, Button, Portal, Modal} from 'react-native-paper';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import DocumentPicker, {types} from 'react-native-document-picker';
import BackHeader from '../../components/Header/BackHeader';
import KeyboardView from '../../components/Container/TabView';
import FormView from '../../components/Container/FormView';
import {useFormik} from 'formik';
import {DateFormat} from '../../utils/dateTime';
import {useDispatch, useSelector} from 'react-redux';
import {RegisterService} from '../../service/userService';
import SuccessModal from '../../components/Modal/SuccessModal';
import {showModal} from '../../redux/features/commonSlice';
import {GetCountryService, GetStateService} from '../../service/commonService';

const Register = ({navigation}) => {
  const {countries} = useSelector(state => state.common);
  const {states} = useSelector(state => state.common);
  const dispatch = useDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [hide, setHide] = useState(true);
  const [fileResponse, setFileResponse] = useState([]);
  var todayDate = new Date();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      mobile: '',
      dob: new Date(),
      role: '',
      address: '',
      country: '',
      state: '',
      resume: 'http://localhost',
    },
    // validationSchema: loginValidate,
    onSubmit: async data => {
      console.log('registerForm', data);
      dispatch(RegisterService(data));
      // navigation.navigate('Education', {registerForm: data});
    },
  });

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [types.pdf],
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const countryData = countries.map(country => {
    return {
      key: country.iso2,
      value: country.name,
    };
  });

  const stateData = states.map(state => {
    return {
      key: state?.iso2,
      value: state?.name,
    };
  });

  const roleData = [
    {key: '1', value: 'Candidate'},
    {key: '2', value: 'Recruiter'},
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  useEffect(() => {
    dispatch(GetCountryService());
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Back" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);

  return (
    <FormView>
      <View style={styles.section}>
        <Text style={styles.headerText}>Create Account</Text>
        <TextInput
          activeOutlineColor="#000"
          label="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          activeOutlineColor="#000"
          label="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          activeOutlineColor="#000"
          label="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          secureTextEntry={hide ? true : false}
          outlineStyle={styles.input}
          style={styles.bodyInput}
          right={
            <TextInput.Icon
              onPress={() => {
                Keyboard.dismiss();
                setHide(!hide);
              }}
              icon={hide ? 'eye-off' : 'eye'}
              size={20}
              style={styles.inputIcon}
              color={'#2358FB'}
            />
          }
        />
        <TextInput
          activeOutlineColor="#000"
          label="Mobile"
          value={formik.values.mobile}
          onChangeText={formik.handleChange('mobile')}
          onBlur={formik.handleBlur('mobile')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          keyboardType="number-pad"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <Button
          icon={'calendar-outline'}
          title="Show Date Picker"
          onPress={showDatePicker}
          labelStyle={{marginRight: 'auto'}}
          style={{
            borderWidth: 1,
            borderColor: '#B7AFA4',
            backgroundColor: '#fff',
            height: 45,
            marginLeft: 12,
            marginRight: 12,
            marginBottom: 12,
            borderRadius: 30,
          }}>
          <Text style={{color: '#000'}}>
            {DateFormat(formik.values.dob) === DateFormat(new Date())
              ? 'Date of Birth'
              : DateFormat(formik.values.dob)}
          </Text>
        </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={formik.values.dob}
          maximumDate={todayDate.setDate(todayDate.getDate() - 1)}
          onConfirm={newDate => {
            hideDatePicker();
            formik.setFieldValue('dob', newDate);
          }}
          onCancel={hideDatePicker}
        />
        <SelectList
          placeholder="Role"
          inputStyles={{color: '#000'}}
          dropdownTextStyles={{color: '#000'}}
          search={false}
          fontFamily="Poppins-Regular"
          boxStyles={[styles.input, {marginBottom: 12}]}
          setSelected={formik.handleChange('role')}
          data={roleData}
          save="value"
        />
        <SelectList
          placeholder="Country"
          inputStyles={{color: '#000'}}
          dropdownTextStyles={{color: '#000'}}
          search={true}
          fontFamily="Poppins-Regular"
          boxStyles={[styles.input, {marginBottom: 12}]}
          setSelected={key => {
            formik.handleChange('country');
            dispatch(GetStateService(key));
          }}
          data={countryData}
          save="key"
        />
        {/* <TextInput
          activeOutlineColor="#000"
          error={formik.errors.state && true}
          label="State"
          value={formik.values.state}
          onChangeText={formik.handleChange('state')}
          onBlur={formik.handleBlur('state')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          outlineStyle={styles.input}
          style={styles.bodyInput}
        /> */}
        <SelectList
          placeholder="State"
          inputStyles={{color: '#000'}}
          dropdownTextStyles={{color: '#000'}}
          search={true}
          fontFamily="Poppins-Regular"
          boxStyles={[styles.input, {marginBottom: 12}]}
          setSelected={formik.handleChange('state')}
          data={stateData}
          save="key"
        />
        <TextInput
          activeOutlineColor="#000"
          error={formik.errors.address && true}
          label="Address"
          value={formik.values.address}
          onChangeText={formik.handleChange('address')}
          onBlur={formik.handleBlur('address')}
          mode="outlined"
          contentStyle={{color: '#000'}}
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <Button
          icon="folder-outline"
          mode="contained"
          labelStyle={{color: '#fff'}}
          style={[
            styles.Resume,
            {backgroundColor: fileResponse.length > 0 ? 'green' : 'black'},
          ]}
          onPress={() => handleDocumentSelection()}>
          {fileResponse.length > 0
            ? 'Upload Successfully!!!'
            : ' Upload Resume'}
        </Button>
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={'middle'}>
            {file?.uri}
          </Text>
        ))}
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={{color: '#fff'}}
          onPress={formik.handleSubmit}>
          Create Account
        </Button>
        <SuccessModal onSubmit={() => dispatch(showModal(false))} />
        <View style={styles.footer}>
          <Text style={styles.footer_inner}>Already have an account ?</Text>
          <Text
            style={styles.footer_btn}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </View>
    </FormView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 0,
  },
  headerText: {
    fontSize: 36,
    padding: 15,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  input: {
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    borderColor: '#B7AFA4',
    borderWidth: 1,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  bodyInput: {
    paddingStart: 12,
    marginBottom: 12,
    height: 45,
    fontSize: 14,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  buttonOutline: {
    marginRight: 'auto',
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 21,
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#0050D1',
    padding: 4,
    borderRadius: 30,
    marginBottom: 12,
  },
  Resume: {
    marginTop: 12,
    marginLeft: 15,
    width: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2F2F42',
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  footer_inner: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  footer_btn: {
    color: '#2358FB',
    marginLeft: 6,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  model: {
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  textModel: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  Button: {
    paddingTop: 15,
  },
  Button2: {
    borderRadius: 10,
    backgroundColor: 'blue',
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 100,
    marginRight: 100,
    padding: 10,
  },
});
